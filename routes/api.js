
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
    
    resp.send("Postagem adicionada com sucesso! A RANA agradece .. ✌");
});

router.delete("/del" , bodyParserJson , ( req , resp ) => {

    let post = posts[req.params.id];
    if (post) {
        console.log(post);
        posts.delPost( id );
        resp.send("Opá você removeu! A RANA excluiu .. ✘");
    } else {
        console("Erro de Conexao !");
    }
});

module.exports = router;