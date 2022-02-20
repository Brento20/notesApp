const express = require("express");
const app = express();

const path = require("path");
const db = require("./db/db")

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
