
//Ex1 - Soma
function soma (numeros){
    let resultado = 0;

    for (let numero of numeros) {
        resultado = resultado + numero;
    }
    return resultado;
}

console.log(soma([10, 20, 30]));
console.log(soma([1, 2, 3, 4]));

//Ex2 - Média
function media (numeros) {
    let resultado = 0
    for (let numero of numeros) {
        resultado = resultado + numero;
    }
    return resultado / numeros.length;
}

console.log(media([10, 20, 30])); // 20
console.log(media([1, 2, 3, 4])); // 2.5


