import e from 'express';
import Err from '../resErr.js'
import eaa from "../middleware.js"
import templet from '../respon.js'
import db from "../koneksi.js"
const gas = e.Router();

gas.get('/', (req, res) => {
  db.query("SELECT * FROM datasiswa ",(err, rslt) => {
    if (err) return Err(505 ,err , "gagal" , res)
   templet(200,rslt,"datang dengan baik", res )
    
  }
)}

) 

gas.get('/kelas', (req, res) => {
  let KELAS = req.params.kelas
  let sql =`SELECT * FROM datasiswa WHERE KELAS = ? ` 
  db.query(sql,[KELAS],(err, rslt) => {
    if (err) return Err(505 , err , "gagal" , res)
    templet(200, rslt, "ada nihhh yg lu cari", res)
    
 
  }
)}
) 


export default gas
