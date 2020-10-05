const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
)
//server was set up for localhosting, developement and to serve up static files
