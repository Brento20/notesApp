const express = require("express");
const app = express;

const path = require("path");
const port = process.env.PORT || 3001;

//

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});