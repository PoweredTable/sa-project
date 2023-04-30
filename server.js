const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express()
app.use(bodyParser.json())


app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
})