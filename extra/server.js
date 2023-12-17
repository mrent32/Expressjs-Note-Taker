// const express = require('express')
// const path = require('path')
// const apiRoutes = require('../db/routes/apiRoutes')
// // const fs = require('fs')

// const app = express()
// const notes = require('../db/db.json')
// const PORT = process.env.PORT || 3001

// app.use(express.json())
// app.use(express.urlencoded({ extended: true}))
// app.use('/', apiRoutes)

// app.use(express.static('public'))

// // GET route for homepage
// app.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, '/index.html')
// ))
// app.get('/notes', (req, res) => 
//     res.sendFile(path.join(__dirname, '/notes.html'))
// )
// app.get('*', (req, res) => 
//     res.sendFile(path.join(__dirname, '/index.html'))
// )


// function createNewNote(body, notesArray) {
//     const newNote = body;
//     if (!Array.isArray(notesArray))
//         notesArray = [];
    
//     if (notesArray.length === 0)
//         notesArray.push(0);

//     body.id = notesArray[0];
//     notesArray[0]++;

//     notesArray.push(newNote);
//     fs.writeFileSync(
//         path.join(__dirname, './db/db.json'),
//         JSON.stringify(notesArray, null, 2)
//     );
//     return newNote;
// }

// app.listen(PORT, () => {
//     console.log('listening on port 3001')
// })