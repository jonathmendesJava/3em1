const express = require('express')
const router = require('./routes')
const app = express()
const { engine } = require('express-handlebars')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', router)
app.get('/imc', router)
app.get('/qrCode', router)
app.get('/conversor', router)

app.listen(3000, () =>{
  console.log('servidor iniciado')
})