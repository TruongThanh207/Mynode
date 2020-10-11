var express = require('express')
var app = express()
const bodyParser = require('body-parser')


var db = require('./db')

const port = 3000
app.use(express.static('public'))

var usersRoute = require('./routes/user.route')
var homeRoute = require('./routes/home.route')



app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index.ejs', {
     title: 'world',
     link: 'Link User'
  })
})


app.use('/user', usersRoute)

app.use('/home', homeRoute)

app.get('/404', function (req, res) {
    res.status(404).sendFile('/absolute/path/to/404.png')
})
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

