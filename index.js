const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.set('views', path.join(__dirname, 'views'));


app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.send('Hello World! deployed 2')
})
app.get('/home', (req, res) => {
    res.render('home.ejs')
    // res.render(__dirname + '/views/home.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})