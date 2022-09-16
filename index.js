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
console.log(filtro_umArray("acessorios"));
// Exercício 2:
function awewa(w, quant) {
    let arrayMat = [];
    let cont = 0;
    let matriz = [];
    for (let i = 0; i < w; i++) {
        cont = i;
    }
    for (let j = 0; j < quant; j++) {
        console.log(arrayMat = [{ i, j }]);
    }
    // matriz = i * j;
}
(awewa(3, 27));
// // const blusas = [
//     { id: 1, marca: 'lacosta', modelo: 'blusa do naruto', preco: 3.50 },
//     { id: 2, marca: 'lacosta', modelo: 'blusa do naruto', preco: 7.00 },
//     { id: 3, marca: 'lacosta', modelo: 'blusa do naruto', preco: 12.50 },
//     { id: 4, marca: 'lacosta', modelo: 'blusa do naruto', preco: 1.99 },
// ]
// blusas.reduce((acc, blusa)=>{
//     if (blusa.id > 1) {
//         acc[0].quantidade += 1;
//     }
//     return acc
//     }
//     , [{ id:1, marca: 'lacosta', modelo: 'blusa do naruto', preco: 12.50, quantidade: 1 }]);
