const express = require('express')
const gas = express.Router();
const Err = require('../resErr')
const templet = require('../respon')
const db = require('../koneksi.js')

gas.post('/login', (req,res) =>{
  let {NAMA , KELAS} = req.body
  let sql = `SELECT * FROM datasiswa WHERE NAMA = ? AND KELAS = ?`
  db.query(sql,[NAMA, KELAS], (err, rslt)=>{
    if (err) return Err(505 , err , "gagal" , res)
      templet(200, rslt, "ada nihhh yg lu cari", res)
    
  })
})

  // ('Hello World!')
gas.post('/iye',(req,res) =>{
    let { NAMA, KELAS, NIS} = req.body;  
    console.log(NAMA);
    console.log(KELAS);
    const rannis = `FLOOR(100000000000 + (RAND() * 899999999999))`
      // nih kalo 404 artinya gak lengkap, kalo 500 data nya gak keterima. blom bikin middleware mas
    if (NAMA == "" || KELAS == ""  ) return Err(404 ,"kosong mas" , "kurang lengkap" , res)
    let sql = `INSERT INTO datasiswa (ID , NAMA , KELAS , NIS) VALUES (NULL , ? , ? , ${rannis} )`
    db.query(sql,[NAMA , KELAS],(err, rslt)=>{
      if (err) return Err(500, err, "gak masuk ke db", res)

      templet(200, rslt, "masukkk", res)
    })
})

module.exports = gas
