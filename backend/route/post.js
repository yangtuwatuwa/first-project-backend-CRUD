import e from 'express';
import Err from '../resErr.js'
import templet from '../respon.js'
import db from "../koneksi.js"
import Mail from '../email.js';
import path from 'path'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
dotenv.config({ path: path.join(__dirname, '../../.env') });   


const gas = e.Router();
const rahasianegara = process.env.SECRET_KEY
console.log(rahasianegara);

gas.post('/login', (req,res) =>{
  let {NAMA , KELAS} = req.body
  let sql = `SELECT * FROM datasiswa WHERE NAMA = ? AND KELAS = ?`
  db.query(sql,[NAMA, KELAS], (err, rslt)=>{

    
    //  let sesion = jwt.sign(rslt , rahasianegara ,{expiresIn: '1h'})
    if (err) return Err(505 , err , "gagal" , res)
      templet(200, rslt, "ada nihhh yg lu cari", res)
      
  })
})

gas.post('/masukk', (req,res) => {
  
  
  let {NAMA , KELAS} = req.body
  let sql = `SELECT * FROM datasiswa WHERE NAMA = ? AND KELAS = ?`
  db.query(sql,[NAMA, KELAS], (err, rslt)=>{
    if (err) return Err(505 , err , "gagal" , res)
      if (!rslt[0]) return console.log("method post masuk: nama yang anda minta tidak ada :(")
      
    const namanya = {
      id:rslt[0].ID,
      nama:rslt[0].NAMA,
      nis:rslt[0].NIS,
      jabatan:rslt[0].Jabatan,
    }
    
   console.log(namanya);
   
     let sesion = jwt.sign(namanya , rahasianegara ,{expiresIn: '1h'})
      templet(200, rslt, "ada nihhh yg lu cari", res)
      console.log(sesion);
      
  })
})

  // ('Hello World!')
gas.post('/iye',(req,res) =>{
    let { NAMA, KELAS} = req.body;  
    console.log(NAMA);
    console.log(KELAS);
    const rannis = `FLOOR(100000000000 + (RAND() * 899999999999))`
      // nih kalo 404 artinya gak lengkap, kalo 500 data nya gak keterima. blom bikin middleware mas
    if ( !NAMA || !KELAS ) return Err(404 ,"kosong mas" , "kurang lengkap" , res)
      
    let sql = `INSERT INTO datasiswa (ID , NAMA , KELAS , NIS) VALUES (NULL , ? , ? , ? )`
    db.query(sql,[NAMA , KELAS, rannis],(err, rslt)=>{
      if (err) return Err(500, err, "gak masuk ke db", res)

      templet(200, rslt, "masukkk", res)
    })
})

gas.post('/gmail', (req, res) => {
  let {subject, teks, emails} = req.body
  Mail(subject, teks, emails)
  res.send("nah ini")
  
})
export default gas
