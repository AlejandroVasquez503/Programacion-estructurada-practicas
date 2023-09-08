//1 - push(): Agrega uno o más elementos al final del array.
let numeros = [1,2,3];
numeros.push(4,5,6)
console.log(numeros)



//2 - pop(): Elimina y devuelve el último elemento del array.

let frutas = ['Manzana','Banana','Uva']
let ultimaFruta = frutas.pop()
console.log(ultimaFruta)
console.log(frutas)



//3 - unshift(): Agrega uno o más elementos al inicio del array.

let colores = ['verde','amarillo'];
colores.unshift('azul','blanco');
console.log(colores)



//4 - shift(): Elimina y devuelve el primer elemento del array.
let paises = ['El Salvador','Peru','Rusia']
let primerElemen = paises.shift();
console.log(primerElemen)
console.log(paises)



//5 - concat(): Combina dos o más arrays para crear un nuevo array
let array1 = [1,2];
let array2 = [3,4];
let combinacionArray = array1.concat(array2);
let combinacionArray2 = array2.concat(array1);

console.log(combinacionArray);
console.log(combinacionArray2);



//6 - slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.
let arrayOriginal = [1,2,3,4,5];
let copiaArray = arrayOriginal.slice(1,4); 
console.log(copiaArray);



//7 - splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.
let Frutas2 = ['Bananas','Naranja','Kiwi','Pera','Manzanaba']
let removerFrutas = Frutas2.splice(2,1,'Uva');
console.log(Frutas2);
console.log(removerFrutas);


//8 - forEach(): Ejecuta una función para cada elemento del array.

let numbers = [1, 2, 3]
numbers.forEach(function(number){

    console.log(number * 2);
});


//9 - map(): Crea un nuevo array aplicando una función a cada elemento del array original.

const products = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10},
]

let precioTotal = 0;

products.forEach(function(producto){
    precioTotal+= producto.precio;
});

console.log('Precio total a pagar $', precioTotal);

//10 - filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada)

let number1 = [1, 2, 3];
let nuevoArreglo = number1.map(function(number){
    return number * 2
});

console.log(nuevoArreglo)

//Ejercicio 2, convertir grados centigrados a grados farenheit 
const Gcelsius = [0, 15, 30, 5, 10]
const Gfarenheit = Gcelsius.map(function(celcius){
    //Formula: F = (C * 9/5) + 32
    return (celcius *9/5) +32;
});

console.log('Grados celsius: ', Gcelsius)
console.log('Grados Farenheit: ', Gfarenheit )

//filter(): Crea un nuevo array con todos los elementos que pasan una prueba (funciónproporcionada).

const num = [2, 8, 3, 6, 10, 4, 7]
const num2 = num.filter(function(number){
    return number > 5
});
console.log(num2);

//Ejercicio 2
const personas = [
    {nombre: 'Yancy', edad: 25},
    {nombre: 'Jose', edad: 17},
    {nombre: 'Luciana', edad: 30},
    {nombre: 'Kevin', edad: 15},
    {nombre: 'Plutarca', edad: 20}
]

const adultos = personas.filter(function(person){
    return person.edad > 18
});

console.log(adultos);


//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.

let nums = [1, 2, 3, 4];
let sum = nums.reduce(function(acumulador , valorActual){
    return acumulador + valorActual
}, 0)//para que los elementos se inicien en 0

console.log(sum)

//every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.

let number = [1, 2, 3, 4, 5]
let mayorCero = number.every(function(number){
    return number > 0 // mayor a 3 y tira false
});

console.log(mayorCero)

//some(): Comprueba si al menos un elemento de un arreglo cumple una condición dada y devuelve true o false.

let number2 = [1, 2, 3, 4, 5]
let numeroPar = number2.some(function(number){
    return number % 2 == 0
})
console.log(numeroPar)

//sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo)

let nombre = ['Margarita', 'Alberto', 'Cesia', 'Santiago', 'Maria']
nombre.sort();
console.log(nombre)






