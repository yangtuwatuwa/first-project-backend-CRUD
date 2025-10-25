const express = require('express')
const app = express()
const port = 3000
const baca = require('body-parser')
const db = require('./koneksi.js')
const templet = require('./respon.js')
const Err = require(`./resErr.js`)
app.use(baca.json())

app.get('/', (req, res) => {
  db.query("SELECT * FROM nama ",(err, rslt) => {
    if (err) throw err
   templet(200,rslt,"datang dengan baik", res )
 
  }
)}
) 
app.get('/:kelas', (req, res) => {
  let kelas = req.params.kelas
  let sql =`SELECT * FROM nama WHERE kelas = '${kelas}' ` 
  db.query(sql,(err, rslt) => {
    if (err) return Err(505 , err , "gagal" , res)
    templet(200, rslt, "ada nihhh yg lu cari", res)
    
  //  templet(200,rslt,"datang dengan baik", res )
    // templet(200, slt, "KEAMBIL SEMUA BRE",res) 
  }
)}
) 

  // ('Hello World!')
app.post('/iye',(req,res) =>{
    let {NIS , nama, kelas, alamat} = req.body;
    let sql = 'INSERT INTO nama (id , NIS , nama , kelas , alamat) VALUES (NULL , ? , ? , ? , ?)'
    db.query(sql,[NIS,nama,kelas, alamat],(err, rslt)=>{
      if (err) return Err(500, err, "gak masuk ke db", res)

      templet(200, rslt, "masukkk", res)
    })
})



app.put('/apdet/:id',(req,res) =>{
    let {id} = req.params;
    let { kelas, nama} = req.body;
    let sql = `UPDATE nama SET nama = ? , kelas = ? WHERE id = ?`
    db.query(sql,[nama , kelas , id ],(err, rslt)=>{
      if (err) return Err(500, err, "error", res)

      templet(200, rslt, "masukkk", res)
    })
})

app.delete('/delete/:NIS',(req, res) =>{
    let {NIS} = req.params;
    let sql = `DELETE FROM nama WHERE NIS = ?`
    db.query(sql , NIS , (err , rslt)=>{
    if (err) return  Err(500, err ,  "error" , res)
      templet(200 , rslt , "berhasil delete dengan sempurna" , res)
      
    })
})
// app.get('/iye',()=>{
//   templet()
// })
app.listen(port, () => {
  console.log(`nih halaman rootingan: http://localhost:${port}`)
  console.log('masuk sini ke db: http://localhost/phpmyadmin/index.php?route=/&route=%2F');
  
})
