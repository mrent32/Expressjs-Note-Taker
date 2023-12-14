const express = require('express')
const path = require('path')
const api = require('./assets/js/index')
// const fs = require('fs')
// const router = require('../db/routes/api.routes')

const app = express()
const notes = require('../db/db.json')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/api', api)

app.get('/notes', (req, res) =>
    res.json(notes.slice(1))
)
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html')
))
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
)

app.listen(PORT, () => {
    console.log('listening on port 3001')
})