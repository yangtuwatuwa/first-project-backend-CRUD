import e from 'express';
import Err from '../resErr.js'
import templet from '../respon.js'
import db from "../koneksi.js"
import Mail from 'nodemailer/lib/mailer/index.js';
const gas = e.Router();


gas.put('/apdet/:ID',(req,res) =>{
    let {ID} = req.params;
    let { KELAS, NAMA} = req.body;
    let sql = `UPDATE datasiswa SET NAMA = ? , KELAS = ? WHERE ID = ?`
    db.query(sql,[NAMA , KELAS , ID ],(err, rslt)=>{
      if (err) return Err(500, err, "error", res)

      templet(200, rslt, "masukkk", res)
    })
})

gas.put('/emailgweh', () => {
  let {sub, teks, email} = req.body
})

export default gas
