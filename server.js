const express = require('express');
const PORT = process.env.PORT || 3001;


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))

app.use(require('./routes'))


app.listen(PORT, () => { 
    console.log('http://localhost:3001')
})

