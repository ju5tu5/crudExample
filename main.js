import express from 'express'
import bodyParser from 'body-parser'
import indexRoute from './routes/index.js'

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use('/', indexRoute)

app.listen(4242, () => console.log('Example app listening on port 4242!'))
