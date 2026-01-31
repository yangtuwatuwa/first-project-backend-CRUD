import e from 'express';
import Err from '../resErr.js'
import templet from '../respon.js'
import db from "../koneksi.js"
const gas = e.Router();

gas.delete('/delete/:NIS',(req, res) =>{
    let {NIS} = req.params;
    let sql = `DELETE FROM datasiswa WHERE NAMA = ?`
    db.query(sql , NIS , (err , rslt)=>{
    if (err) return  Err(500, err ,  "error" , res)
      templet(200 , rslt , "berhasil delete dengan sempurna" , res)
      
    })
})

export default gas
