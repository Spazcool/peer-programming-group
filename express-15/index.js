const express = require('express')
const path = require('path')
// const router = express.Router()

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static('public'))

// @TODO add auth middleware
// @TODO add registration page
// @TODO add logout route

app.use('/', require('./routes/index'))

// app.get('/', (req, res) => {
//   res.render('index')
// })

// // module.exports = router

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))