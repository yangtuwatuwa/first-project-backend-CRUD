const respon = (statsuCode, data, pesan, res) => {

    
    res.json([
        {
            alert:true,
            statsuCode: statsuCode,
            pesan :{
                jawaban: data,
                pesan :pesan
            },
        }    
    ])
}

module.exports = respon