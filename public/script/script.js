//DOMcontentLoaded = Assim que a pagina carregar chamaremos a função
document.addEventListener('DOMContentLoaded', function () {

    atualizacaoPost();
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
})

function atualizacaoPost() {

    //     let myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // let dadosDeValidacao = JSON.stringify({
    //   usuario: inputLogin.value,
    //   senha:inputSenha.value,
    // });

    // let requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: dadosDeValidacao,
    //   redirect: 'follow'
    // };


    let url = "http://localhost:3002/api/lista";

    fetch(url)
        .then(resposta => resposta.json())
        .then((resultado) => {

            let elementos = '';

            let posts = JSON.parse(resultado);

            posts.forEach((post) => {

                let postElemento = `
                        <div id="${post.id}" class="card orange lighten-2">
                            <div class="card-content ">
                                <span class="card-title">${post.titulo}</span>
                                <p>${post.descricao}</p>
                            </div>
                        </div>
            `
                elementos += postElemento;
            })

            document.getElementById("posts").innerHTML = elementos;

        }).catch(error => {
            console.log(error);
        })
}

function addPost() {

    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("desc").value;

    console.log(descricao, titulo);

    let post = { titulo, descricao };
    let url = "http://localhost:3002/api/add";


    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");



    let opcao = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(post),
        redirect: 'follow'
    };



    fetch(url, opcao)
        .then(resposta => {
            console.log(resposta);
            atualizacaoPost();
            document.getElementById("titulo").value ='';
            document.getElementById("desc").value ='';
        })
        
}
