const sim = require(`cors`)
const express = require('express')
const app = express()
const port = 3000
const baca = require('body-parser')
const get = require('./route/get.js')
const post = require('./route/post.js')
const put = require('./route/put.js')
const del = require('./route/delete.js')


app.use(sim({
  origin: "*",
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders:['Content-type']
}))
//udah gw benerin
app.use(baca.json())
app.use('/', get)
app.use('/' , post)
app.use('/', put)
app.use('/', del)
// app.use('/', get)
app.listen(port, () => {
  console.log(`nih halaman rootingan: http://localhost:${port}`)
  console.log('masuk sini ke db: http://localhost/phpmyadmin/index.php?route=/&route=%2F');
  
})
