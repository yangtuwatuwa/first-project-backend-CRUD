const express = require('express')
const gas = express.Router();
const Err = require('../resErr')
const templet = require('../respon')
const db = require('../koneksi.js')

gas.delete('/delete/:NIS',(req, res) =>{
    let {NIS} = req.params;
    let sql = `DELETE FROM datasiswa WHERE NAMA = ?`
    db.query(sql , NIS , (err , rslt)=>{
    if (err) return  Err(500, err ,  "error" , res)
      templet(200 , rslt , "berhasil delete dengan sempurna" , res)
      
    })
})


module.exports = gas
