const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const db = require('../db.json')

router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, db))
})


router.post('/notes', (req, res)=> {
   const db = res.json(fs.readFile('db/db.json', 'utf-8'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: req.body.id,
    }
    db.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
})
module.exports = router