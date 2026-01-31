const jawa = (err, req, res, next) =>{
    console.log(err.stack);
    res.status(505).send("jembud")
}

export default jawa