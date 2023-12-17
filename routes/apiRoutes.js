const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const getNotes = () => {
    return readFile('db/db.json', 'utf-8').then(rawNotes=> [].concat(JSON.parse(rawNotes)))
}

router.get('/notes', (req, res)=> {
    getNotes().then(notes=>res.json(notes))
})
router.post('/notes', (req, res)=> {
    getNotes().then(oldNotes =>{
       const { title, text} = req.body
       const newNoteArr = [...oldNotes, {title, text}]
        writeFile('db/db.json', JSON.stringify(newNoteArr)).then(()=> res.json({msg: 'OK '}))    })
})
router.delete('/notes/:id', (req, res)=> {

})
// notes.post('/notes', (req, res)=> {
//    console.log(req.body);

//    const { noteName, note } = req.body;

//    if(req.body) {
//     const newNote = {
//         noteName, 
//         note,
//     }
//     readAndAppend(newNote, '../db/db,json');
//     res.json('Note added succesfully!')
//    }else {
//     res.error('error in adding note');
//     }
// })
module.exports = router

// const note = res.json(fs.readFile('db/db.json' .then(err, 'db/db.json')))

// const newNote = {
//     title: req.body.title,
//     text: req.body.text,
//     id: req.body.id,
// }
// note.push(newNote)
// fs.writeFileSync('db/db.json', JSON.stringify(note))
// res.json(note)