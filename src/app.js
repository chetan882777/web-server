const express = require("express")
const path = require("path")
const hbs = require("hbs")
const geoCode = require("./utils/geocode")
const forecast = require("./utils/forcast")

const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engin and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup statis directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        message: "For more help contact xxxxx"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        message: 'This was all about me!'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide address!'
        })
    }

    geoCode(req.query.address, (error, { latitude, longitude, location }= {}) => {

        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (forecastError, { data }) => {
            if (forecastError) {
                return res.send({ forecastError })
            }

            res.send({
                data,
                location
            })
        })
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 help',
        error: 'Help article not found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page not found!'
    })
})


app.listen(port, () => {
    console.log('Server is up on port 3000')
})