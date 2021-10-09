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

    delPost( id ){

        this.postagens.delete({ id , titulo, descricao })
    },
    

}

function criadorId(){
    return Math.random().toString(36).substr(2, 9);
}

// setInterval( function() {
//     let id = 0;
//     let soma = id++;
//     id = soma;
// } ,2000);