var tamanhoPeca = 0;
var nomePeca = "";
var tamanhoCaixa = 0;

    tamanhoPeca = prompt( "Informe o peso da peça");
    if(tamanhoPeca >= 100){
    console.log("Informe o nome da peça")
    }else{
    console.log("Cadastro não permitido")
    }

    nomePeca = prompt( "Informe o nome da peça");
    if  ( nomePeca . comprimento >= 3 ){
    console.log("Nome Permitido")
    }else{
    console.log("ERRO:Peça não encontrada")
    }

    tamanhoCaixa = prompt("Qual a Quantidade de Peça na Caixa Atual?");
    if  (tamanhoCaixa >= 10){
    console.log("Sua caixa está cheia")
    }else{
    console.log ("Peça adicionada a caixa")
    }