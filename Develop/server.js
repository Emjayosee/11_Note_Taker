const express = require('express');
const uuid = require('uuid');
const app = express();

const PORT = process.env.PORT || 3000;

// will share any static html files with the browser
app.use( express.static('public') );
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbFile = '/db/db.json';

let noteList = [{id: "0000-0000-0000-0000", title: 'To Do', text: 'Finish Assignment 11'}];

// Endpoints =================================================

// you will need to create 3 endpoints here, and it should work magically :)
// note: for app.post: newNote.id = uuid.v4() // use a random unique id.
// ... code away ...

app.get('/notes', function(req, res) {
    // get the note info
    res.sendFile('public/notes.html' , { root : __dirname});
});

app.get('/api/notes', function(req, res) {
    // get the note info
    res.send(JSON.stringify(noteList));
});

app.post('/api/notes', function(req, res) {
    // get the note info
    console.log(req.body)
    var newNote = (req.body);
    newNote.id = uuid.v4()
    noteList.push(newNote);
    console.log(newNote.id)
    res.send(JSON.stringify(noteList));
});

// app.delete('/api/notes ; deleteNote', function(req, res) {
//
// res.send( noteData );
// });

// Listener ==================================================
app.listen(PORT, function() {
    console.log(`Serving notes on PORT ${PORT}`)
})
