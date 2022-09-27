"use strict";
const produtos = [
    {
        id: 1,
        modelo: "blusa do naruto",
        marca: "lacosta",
        categoria: "blusa",
    },
    {
        id: 2,
        modelo: "bermuda do naruto",
        marca: "lacosta",
        categoria: "bermuda",
    },
    {
        id: 3,
        modelo: "bandana do naruto",
        marca: "lacosta",
        categoria: "acessorios",
    },
];
// Exercício 1:
console.log(produtos);
function filtro_umArray(categoria) {
    return produtos.filter((produto) => {
        return produto.categoria === categoria;
    });
}
console.log('Exercício 1: ');
console.log(filtro_umArray("acessorios"));
// Exercício 2:
function exibeMat(tam) {
    let arr = [];
    let matriz = [];
    for (let i = 0; i < tam; i++) {
        arr[i] = i + 1;
    }
    let cont = 0;
    for (let i = 0; i < tam; i++) {
        if (i % 3 === 0) {
            matriz[cont] = arr.slice(i, i + 3);
            cont++;
        }
    }
    return matriz;
}
console.log('Exercício 2: ');
console.log(exibeMat(27));
function geraMatrizSomada(tam) {
    const matriz = exibeMat(tam);
    return matriz.map((array) => {
        const soma = [0];
        soma[0] = array.reduce((acumulador, atual) => {
            // console.log(acumulador, atual);
            return acumulador + atual;
        });
        // matriz.reduce(function(previousValue, currentValue){ 
        //   return previousValue[tam] + currentValue[3];
        // });
        return soma;
    });
}
console.log("Matriz somada gerada:", geraMatrizSomada(27));
