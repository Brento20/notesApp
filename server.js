// require express.js and set it to a variable 
const express = require("express");
const app = express();

// call methods of express middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require file system 
var fs = require('fs');

// paths databases and ports for server.js 
const path = require("path");
const db = require("./db/db")
const PORT = process.env.PORT || 3002;

// route to index.html on load with a "/"
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// route to notes.html when html links to note taking page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.route("/api/notes")
    .get(function (req, res) {
        res.json(db);
    })


.post(function (req, res) {
    let jsonFilePath = path.join(__dirname, "./db/db.json");
    let newNote = req.body;


    let maxId = 20;

    for (let i = 0; i < db.length; i++) {
        let individualNote = db[i];
        if (individualNote.id > maxId) {
            maxId = individualNote.id;
        }
    }

    newNote.id = maxId + 1;

    db.push(newNote)


    fs.writeFile(jsonFilePath, JSON.stringify(db), function (err) {

        if (err) {
            return console.log(err);
        }
        console.log("Your note was saved!");
    });

        res.json(newNote);
    });


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
