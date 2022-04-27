let carros = [
    {
        modelo: "Celta",
        cor: "Preto",
        ano: "2014"
    },
    {
        modelo: "Uno super-sônico de escada e adesivo de empresa de internet",
        cor: "Branco",
        ano: 1991
    },
    {
        modelo: "Marea bomba",
        cor: "Queimado",
        ano: 2021
    }
]; 

for (let carro of carros) {
    for(propriedade in carro) {
        console.log(carro[propriedade])
    }
}