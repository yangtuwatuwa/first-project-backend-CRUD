const express = require('express')
const gas = express.Router();
const Err = require('../resErr')
const templet = require('../respon')
const db = require('../koneksi.js')
gas.get('/', (req, res) => {
  db.query("SELECT * FROM datasiswa ",(err, rslt) => {
    if (err) return Err(505 ,err , "gagal" , res)
   templet(200,rslt,"datang dengan baik", res )
 
  }
)}

) 

gas.get('/:kelas', (req, res) => {
  let KELAS = req.params.kelas
  let sql =`SELECT * FROM datasiswa WHERE KELAS = ? ` 
  db.query(sql,[KELAS],(err, rslt) => {
    if (err) return Err(505 , err , "gagal" , res)
    templet(200, rslt, "ada nihhh yg lu cari", res)
    
 
  }
)}
) 


module.exports = gas
