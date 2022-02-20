const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3001;

//

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
