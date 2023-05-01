require('dotenv').config();
const pg = require("pg")

const database = new pg.Client(process.env.DATABASE_URL)

database.connect((erro) => {
    if (erro) {
        return console.log("Unable to connect to ElephantSQL", erro)

    } else {
        return console.log("Successfully connected to ElephantSQL")
    }
})

module.exports = database