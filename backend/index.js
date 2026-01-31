import sim from 'cors'
import express from 'express'
import baca from 'body-parser'
import get from './route/get.js'
import post from './route/post.js'
import put from './route/put.js'
import del from './route/delete.js'
import middle from "./middleware.js"
import mail from "./email.js"

const app = express()
const port = 3000

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


app.listen(port, () => {
  console.log(`nih halaman rootingan: http://localhost:${port}`)
  console.log('masuk sini ke db: http://localhost/phpmyadmin/index.php?route=/&route=%2F');
  
})
