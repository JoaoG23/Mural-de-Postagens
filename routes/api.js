
const express = require('express');
const bodyParser = require('body-parser');
let bodyParserJson = bodyParser.json();
const posts = require('../model/posts');
const router = express.Router();

router.get("/lista", (req, resp) => {

    resp.json(JSON.stringify(posts.listPosts()))

});



router.post("/add",bodyParserJson, (req, resp) => {
    
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    posts.novoPost(titulo, descricao);
    
    resp.send("Postagem adicionada com sucesso! A RANA agradece .. ✌")
});

module.exports = router;