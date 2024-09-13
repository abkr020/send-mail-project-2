const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();


const path = require('path');
app.set('views', path.join(__dirname, 'views'));


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const emailRoute = require("./routes/email.route.js");


app.get('/', (req, res) => {
    res.send('Hello World! deployed 2 send email through nodemailer')
})
app.get('/home', (req, res) => {
    res.render('home.ejs')

})
app.use("/se", emailRoute);




app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})