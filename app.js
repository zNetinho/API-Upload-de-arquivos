var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors());
app.use(express.json()); // for parsing application/json


app.listen(3000, () => {
    console.log('Servidor ligado')
})

//DB Conexão
const conn = require("./db/conn")
conn();

//Rotas da imagens.
const pictureRoute = require("./routes/pictureRoutes");

app.use("/pictures", pictureRoute) 