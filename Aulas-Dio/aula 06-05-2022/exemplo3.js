var pessoa = {
    "nome": "Cassiano",
    "idade": 32,
    "cpf": "000000",
    "competencias": ["Javascript", "cloud", "api"],
    "atividades": [
        {
            "descricao":"Reuniao da Dio",
            "horario":"9:00am"
        },
        {
            "descricao":"Transforma Tec",
            "horario":"2:00am",
        }
    ]
}

console.log("Pessoa", pessoa)

console.log("Nome da pessoa: ", pessoa.nome)

console.log("Competência da pessoa", pessoa.competencias[0])

console.log("Nome da atividade da pessoa: ", pessoa.atividades[1].descricao)