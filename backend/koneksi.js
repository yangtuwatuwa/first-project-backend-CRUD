const sql = require(`mysql2`)
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') }); 



console.log("host:", process.env.host);

const db = sql.createConnection({
    host :process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.nameOfTable,
    port :3306
})
db.connect((err) => {
    let hasil = (err) ? '❌ Gagal konek ke database:' : '✅ Tersambung ke MYSQL!'
    console.log("STATUS MU ADALAH :",hasil);
    
});
module.exports = db