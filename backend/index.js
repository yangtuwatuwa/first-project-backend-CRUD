const express = require('express')
const app = express()
const port = 3000
const sim = require(`cors`)
const baca = require('body-parser')
const db = require('./koneksi.js')
const templet = require('./respon.js')
const Err = require(`./resErr.js`)
app.use(sim())
app.use(baca.json())


app.get('/', (req, res) => {
  db.query("SELECT * FROM NamaSiswa ",(err, rslt) => {
    if (err) return Err(505 ,err , "gagal" , res)
   templet(200,rslt,"datang dengan baik", res )
 
  }
)}
) 
app.get('/:kelas', (req, res) => {
  let kelas = req.params.kelas
  let sql =`SELECT * FROM NamaSiswa WHERE kelas = '${kelas}' ` 
  db.query(sql,(err, rslt) => {
    if (err) return Err(505 , err , "gagal" , res)
    templet(200, rslt, "ada nihhh yg lu cari", res)
    
 
  }
)}
) 

  // ('Hello World!')
app.post('/iye',(req,res) =>{
    let {NIS , Nama, Kelas, Alamat} = req.body;
    let sql = 'INSERT INTO NamaSiswa (ID , NIS , Nama , kelas , Alamat) VALUES (NULL , ? , ? , ? , ?)'
    db.query(sql,[NIS ,Nama , Kelas, Alamat],(err, rslt)=>{
      if (err) return Err(500, err, "gak masuk ke db", res)

      templet(200, rslt, "masukkk", res)
    })
})



app.put('/apdet/:ID',(req,res) =>{
    let {ID} = req.params;
    let { kelas, Nama} = req.body;
    let sql = `UPDATE NamaSiswa SET Nama = ? , kelas = ? WHERE ID = ?`
    db.query(sql,[Nama , kelas , ID ],(err, rslt)=>{
      if (err) return Err(500, err, "error", res)

      templet(200, rslt, "masukkk", res)
    })
})

app.delete('/delete/:NIS',(req, res) =>{
    let {NIS} = req.params;
    let sql = `DELETE FROM NamaSiswa WHERE NIS = ?`
    db.query(sql , NIS , (err , rslt)=>{
    if (err) return  Err(500, err ,  "error" , res)
      templet(200 , rslt , "berhasil delete dengan sempurna" , res)
      
    })
})

app.listen(port, () => {
  console.log(`nih halaman rootingan: http://localhost:${port}`)
  console.log('masuk sini ke db: http://localhost/phpmyadmin/index.php?route=/&route=%2F');
  
})
