const responErr = (statsuCode, data, pesan, res) => {

    
    res.json([
        {
            statsuCode: statsuCode,
            pesan :{
                codeSql: data.code,
                SqlMessage: data.sqlMessage,
                sqlNote:data.sql,
               pesan :pesan   
            },
        }    
    ])
}

module.exports = responErr