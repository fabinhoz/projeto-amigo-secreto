//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura e trata o valor do input
    let nome = document.getElementById("amigo").value.trim();

    // Validação: campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    listaDeAmigos.push(nome);
    console.log(listaDeAmigos);

    // Atualiza a lista exibida na tela
    atualizarListaNaTela();

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarListaNaTela() {
    // Seleciona a <ul> onde os nomes serão exibidos
    let ul = document.getElementById("listaAmigos");

    // Limpa o conteúdo anterior
    ul.innerHTML = "";

    // Percorre o array e adiciona cada amigo como <li>
    let i = 0;
    while (i < listaDeAmigos.length) {
        ul.innerHTML += "<li>" + listaDeAmigos[i] + "</li>";
        i++;
    }
}



// Função de sorteio (placeholder, para implementar depois)
function sortearAmigo() {
    

    let resultado = document.getElementById("resultado");
   

    // Valida se há amigos na lista
    if (listaDeAmigos.length === 0) {
        //resultado.innerHTML = "<li>Nenhum amigo para sortear.</li>";
        //return;
        alert('Por favor, insira seus amigos para sorteio!');
    }
     else {
    // Gera índice aleatório
    let indice = parseInt(Math.floor(Math.random() * listaDeAmigos.length));

    // Obtém o nome correspondente
    let nomeSorteado = listaDeAmigos[indice];

    //mostra no console
    console.log(listaDeAmigos[indice]);
    console.log(indice);


    // Exibe o resultado na tela
    resultado.innerHTML = "<li>Amigo sorteado: " + nomeSorteado + "</li>";
    }
}




