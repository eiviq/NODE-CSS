let listaNomes = ["align-items", "background-color", "border-radius"];
const readline = require('readline-sync');

do{
    var nome = readline.question("informe o item CSS, digite lista para ver os itens, ou digite sair para encerrar");
    if(nome != "sair" && nome != "lista")
    {
    listaNomes.push(nome)
    }
    if(nome === "lista"){
        console.log(listaNomes);
    }
}while(nome !="sair")

console.log(listaNomes.sort());