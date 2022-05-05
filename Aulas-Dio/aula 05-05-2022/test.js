// Declarando um objeto na notação JSON

var pessoa = {
    //Propriedade : valor
    "nome" : "Thiago",
    "idade" : 32
}

//Obtendo dado do JSON

console.log("Dados da pessoa: ", pessoa)

//Obtendo uma propriedade do objeto pessoas

var idade = pessoa.idade;

console.log("Idade da pessoa", idade)

pessoa.nome = "Jose";

console.log("Novo nome da pessoa: ", pessoa)