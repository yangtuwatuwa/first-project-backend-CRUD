const respon = (statsuCode, data, pesan, res) => {

    
    res.json(
        {
            statsuCode: statsuCode,
            pesan :{
                jawaban: data,
                pesan :pesan
            },
        }    
    )
}

module.exports = respon