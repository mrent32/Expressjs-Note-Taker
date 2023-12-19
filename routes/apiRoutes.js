const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const { v4: uuidv4 } = require('uuid');
const allNotes = require('../db/db.json')

const getNotes = async () => {
    return readFile('db/db.json', 'utf-8').then(rawNotes => [].concat(JSON.parse(rawNotes)))
}
// gets all notes
router.get('/notes', (req, res) => {
    getNotes().then(notes=>res.json(notes))
})
// gets an individual note
router.get('/notes/:id', (req, res)=> {
    getNotes().then(notes=> res.json(notes));

    
})
router.post('/notes', (req, res)=> {
    getNotes().then(oldNotes => {
       const { title, text} = req.body
       const newNoteArr = [...oldNotes, {title, text}]
        writeFile('db/db.json', JSON.stringify(newNoteArr)).then(()=> res.json({msg: 'OK '}))})
})
// router.delete('/notes/:id', (req, res)=> {
//     const deleteNote = () => {
//      const indNote = getNotes().then(notes=> res.json(notes));
//      indNote.filter(this.delete(indNote))
//     }
//     console.log(indNote)
//     deleteNote()
// })


module.exports = router
