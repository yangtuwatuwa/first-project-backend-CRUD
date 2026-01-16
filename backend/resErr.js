const responErr = (statsuCode, data, pesan, res) => {

    
    res.json([
        {
            alert: false,
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