// 1) Implemente um método que crie um novo array baseado nos valores passados.
function createArray(length, value) {
    let array = [];

    for (let i = 0; i < length; i++) {
        array.push(value);
    }

    return array;
}

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
function invertArray(array) {

    let inverted = [];

    for(let i = array.length-1; i >=0; i--) {
        inverted.push(array[i]);
    }

    return inverted;
}


// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
function clearArray(array) {
    let clean = [];

    for(let i in array) {
        if(array[i] == false || array[i] == undefined || array[i] == null) {
            continue;
        }
        clean.push(array[i]);
    }

    return clean;

}

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
function arrayToObject(array) {
    let pairs = {};

    for (let i in array) {
        pairs[array[i][0]] = array[i][1];
    }

    return pairs;
}

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.

function removeValues(array, ...values) {

    let clean = [];
    for(let i in array) {
        if(!values.includes(array[i])) {
            clean.push(array[i]);
        }
    }

    return clean;
}

// 6) Implemente um método que retorne um array, sem valores duplicados.
function removeDuplicated(array) {
    let clean = [];

    for(let i in array) {
        if(!clean.includes(array[i])) {
            clean.push(array[i]);
        }
    }

    return clean;
}

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
function compareArrays(array1, array2) {

    if (array1.length !== array2.length) return false
    for(let i in array1) {
        if(array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
function toUnnested(array) {
    let unnested = array.flat(1);

    return unnested;
}

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
function divideArray(array, value) {

    let divided = [];

    for(let i=0;i < array.length;i+=value) {
        divided.push(array.slice(i, i+value));
    }

    return divided;
}

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
function findEquals(array1, array2) {
    let equals = [];

    for(let i in array1) {
        if(array2.includes(array1[i]) && !equals.includes(array1[i])) {
            equals.push(array1[i]);
        }
    }

    return equals;
}

console.log(createArray(3, 'a'));
console.log(invertArray([1,2,3,4]));
console.log(clearArray([1,2,'', undefined, null, 0, false]));
console.log(arrayToObject([["c",2],["d",4]]));
console.log(removeValues([5,4,3,2,5], 5,3));
console.log(removeDuplicated([1,2,3,3,2,4,5,4,7,3]));
console.log(compareArrays([1,2,3,4],[1,2,3,4]));
console.log(toUnnested([1, 2, [3], [4, 5]]));
console.log(divideArray([1, 2, 3, 4, 5], 2));
console.log(findEquals([6, 8], [8, 9]));