const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.set("strictQuery", true)

async function main() {
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiexpress.heyq1gw.mongodb.net/Arquives?retryWrites=true&w=majority`)
    .then(() => {
        console.log(`Conectado ao MongoDB`)
    })
    .catch((e) => {
        console.log(e)
    })

}

module.exports = main;