const porta = 3002;
const express = require('express');
const path = require("path");
const app = express();
const cors = require('cors');
const apiRoute = require("./routes/api");

app.use(cors())
app.use('/', express.static(path.join(__dirname, "public")));
app.use('/api', apiRoute);


// app.delete("/del" , bodyParserJson , (req , resp ) => {
    
// })

app.listen(porta, () => {
    console.log("⌛ Bem Vindo ao Servidor RANA ☝! Serviços de Iniciados com Sucesso na porta ", porta)
})

