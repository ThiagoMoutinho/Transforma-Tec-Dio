function display(mensagem) {
    document.getElementById("resultado").innerHTML = mensagem
}

const promessa = new Promise(
    function(sucesso, erro) {
        var a = 10;

        var b = 20;

        var c = a + b;
        
        if(!c) {
            erro("Erro ao executar a função")
        } else {
            sucesso("A Soma é: " + c)
        }
    }
)

promessa.then(
    function(sucesso) {
        display(sucesso)
    }
).catch(
    function(erro){
        display(erro)
    }
)