const router = require('express').Router
const fs = require('fs')

router.get('./notes', (req, res)=> {
    res.sendFile(path.join(__dirname, './public/notes.html')); 
    res.json()
})
router.get('./index', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
    res.json()
})

router.post('/api/notes', (req, res)=> {
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