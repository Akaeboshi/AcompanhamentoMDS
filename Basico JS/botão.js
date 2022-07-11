var area = document.getElementById('area')

function entrar(){
    var quiser = prompt("Digite o que quiser");

    if(quiser === '' || quiser === null){
        alert("Errou ai amigao")
        area.innerHTML = "Digita algo ai..."
    }else{
        area.innerHTML = "Bem vindo! " + quiser + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

    }

    function sair(){
        alert("Falows");
        area.innerHTML = "Você saiu!!\n"
        let botaoMedia = document.createElement("button");
        botaoMedia.innerText = "Digitar notas";
        botaoMedia.onclick = mediaAluno;
        area.appendChild(botaoMedia);
    }


    function mediaAluno(nota1, nota2){
        var nota1 = prompt("Nota 1")
        var nota2 = prompt("Nota 2")
        var media = (nota1 + nota2) / 2;

        if(media >= 7){
            console.log("Aluno aprovado com a média: " + media)
        }else if(media < 7){
                console.log("Aluno reprovado com a média: " + media)
        }
    }

    function aluno(nome, curso){
        var mensagem = "Seja bem vindo " + nome + " ao curso de" + curso;
        console.log(mensagem);
    }

  
}