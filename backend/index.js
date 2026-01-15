const sim = require(`cors`)
const express = require('express')
const app = express()
const port = 3000
const baca = require('body-parser')
const db = require('./koneksi.js')
const templet = require('./respon.js')
const Err = require(`./resErr.js`)
app.use(sim({
  origin: "*",
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders:['Content-type']
}))
app.use(baca.json())
app.get('/', (req, res) => {
  db.query("SELECT * FROM datasiswa ",(err, rslt) => {
    if (err) return Err(505 ,err , "gagal" , res)
   templet(200,rslt,"datang dengan baik", res )
 
  }
)}

) 
app.get('/:kelas', (req, res) => {
  let KELAS = req.params.kelas
  let sql =`SELECT * FROM datasiswa WHERE KELAS = ? ` 
  db.query(sql,[KELAS],(err, rslt) => {
    if (err) return Err(505 , err , "gagal" , res)
    templet(200, rslt, "ada nihhh yg lu cari", res)
    
 
  }
)}
) 
  // ('Hello World!')
app.post('/iye',(req,res) =>{
    let { NAMA, KELAS} = req.body;    
    if (NAMA == "" || KELAS == "") return Err(404 ,"kosong mas" , "nama yang anda maksud kosong mas" , res)
    let sql = 'INSERT INTO datasiswa (ID , NAMA , KELAS) VALUES (NULL , ? , ? )'
    db.query(sql,[NAMA , KELAS],(err, rslt)=>{
      if (err) return Err(500, err, "gak masuk ke db", res)

      templet(200, rslt, "masukkk", res)
    })
})



app.put('/apdet/:ID',(req,res) =>{
    let {ID} = req.params;
    let { KELAS, NAMA} = req.body;
    let sql = `UPDATE datasiswa SET NAMA = ? , KELAS = ? WHERE ID = ?`
    db.query(sql,[NAMA , KELAS , ID ],(err, rslt)=>{
      if (err) return Err(500, err, "error", res)

      templet(200, rslt, "masukkk", res)
    })
})

app.delete('/delete/:NIS',(req, res) =>{
    let {NIS} = req.params;
    let sql = `DELETE FROM datasiswa WHERE NAMA = ?`
    db.query(sql , NIS , (err , rslt)=>{
    if (err) return  Err(500, err ,  "error" , res)
      templet(200 , rslt , "berhasil delete dengan sempurna" , res)
      
    })
})

app.listen(port, () => {
  console.log(`nih halaman rootingan: http://localhost:${port}`)
  console.log('masuk sini ke db: http://localhost/phpmyadmin/index.php?route=/&route=%2F');
  
})
