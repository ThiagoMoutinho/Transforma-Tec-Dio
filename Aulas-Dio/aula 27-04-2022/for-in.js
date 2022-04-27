let usuario = {
    nome: 'Thiago',
    idade: '29',
    email: 'thiago@gmail.com',
}

console.log(usuario.email)

for (propriedade in usuario) {
    console.log("Propriedade do usuário: " + usuario[propriedade])
}