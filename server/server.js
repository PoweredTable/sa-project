const express = require("express");
const cors = require('cors');
const port = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})