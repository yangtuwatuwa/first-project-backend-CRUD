const sql = require(`mysql`)
require(`dotenv`).config()
const db = sql.createConnection({
    host :process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.nameOfTable
})

db.connect((err) => {
    let hasil = (err) ? '❌ Gagal konek ke database:' : '✅ Tersambung ke MySQL!'
    console.log(hasil);
    
});

module.exports = db