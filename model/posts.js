module.exports = {

    postagens: [
        {
            id:"21",
            titulo:"Teste de Titulos",
            descricao:"Descrição de Testes"
        },
    ],

    listPosts(){

        return this.postagens;
    },

    novoPost( titulo, descricao ){

         this.postagens.push({ id:criadorId(), titulo, descricao });
    },

}

function criadorId(){
    return Math.random().toString(36).substr(2, 9);
}

// function cr(){
//     let id  = 0
//     let soma = (id + 1);
//     id = soma;
// }