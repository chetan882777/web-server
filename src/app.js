const express = require("express")
const path = require("path")

const app = express()
const publicDirPath = path.join(__dirname , '../public')

app.use(express.static(publicDirPath))

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})