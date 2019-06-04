const express = require("express")
const path = require("path")

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname , '../public')
const viewsPath = path.join(__dirname , "../templates")

// Setup handlebars engin and views location
app.set("view engine" , "hbs")
app.set("views" , viewsPath)

// Setup statis directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "For more help contact xxxxx"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About developer',
        name: 'Chetan Pawar'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})