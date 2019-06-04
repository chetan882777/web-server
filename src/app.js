const express = require("express")

const app = express()

app.get('', (req, res) => {
    res.send("Hello Express!")
})

app.get('/help', (req, res) => {
    res.send("Help Page.")
})

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})