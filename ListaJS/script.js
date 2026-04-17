function soma (numeros){
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    return total;
}




//Testes
console.log(soma([10, 20, 30]));


