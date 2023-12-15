const notes = require('express').Router()
const path = require('path')
const fs = require('fs')
const db = require('../db.json')
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../')

notes.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})


notes.post('/notes', (req, res)=> {
   console.log(req.body);

   const { noteName, note } = req.body;

   if(req.body) {
    const newNote = {
        noteName, 
        note,
    }
    readAndAppend(newNote, '../db/db,json');
    res.json('Note added succesfully!')
   }else {
    res.error('error in adding note');
    }
})
module.exports = notes

// const note = res.json(fs.readFile('db/db.json' .then(err, 'db/db.json')))

// const newNote = {
//     title: req.body.title,
//     text: req.body.text,
//     id: req.body.id,
// }
// note.push(newNote)
// fs.writeFileSync('db/db.json', JSON.stringify(note))
// res.json(note)