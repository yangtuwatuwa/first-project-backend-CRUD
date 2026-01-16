const express = require('express')
const gas = express.Router();
const Err = require('../resErr')
const templet = require('../respon')
const db = require('../koneksi.js')

gas.put('/apdet/:ID',(req,res) =>{
    let {ID} = req.params;
    let { KELAS, NAMA} = req.body;
    let sql = `UPDATE datasiswa SET NAMA = ? , KELAS = ? WHERE ID = ?`
    db.query(sql,[NAMA , KELAS , ID ],(err, rslt)=>{
      if (err) return Err(500, err, "error", res)

      templet(200, rslt, "masukkk", res)
    })
})



module.exports = gas
