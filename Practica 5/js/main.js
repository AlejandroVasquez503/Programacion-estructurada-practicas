//---------------EJEMPLOS-------------
//declaracion de la funcion saludar
function saludar() {
    //contenido de la funcion
    console.log('Hola soy una funcion')
}

function tablaDelUno(hasta) {
    for (let i = 1; i <= hasta; i++) {
        console.log('1 x', i, ' = ', 1 * i)
    }
}

//Ejecucion
tablaDelUno(10)
console.log('------------------------------------')
tablaDelUno(5)
console.log('------------------------------------')


function tablaMultiplicar(tabla, hasta) {
    for (let i = 1; i <= hasta; i++) {
        console.log(tabla + ' x ' + i + ' = ' + (tabla * i))
    }
}
//Ejecucion
tablaMultiplicar(1, 10)
console.log('------------------------------------')
tablaMultiplicar(5, 10)
console.log('------------------------------------')


//declaracion
function tabla(tabla, hasta = 10) {
    for (let i = 1; i <= hasta; i++) {
        console.log(tabla + ' x ' + i + ' = ' + (tabla * i))
    }
}
//ejecucion
tabla(2)
console.log('------------------------------------')
tabla(2, 15)
console.log('------------------------------------')


function sumar(a, b) {
    return a + b
    console.log('resultado')
}

const resultado = sumar(5, 5)
console.log('Resultado =', resultado)


//-------EJERCICIOS-------
//---------------ejercicio 1--------------
// 1. Crea una función llamada saludo que muestre un mensaje de saludo en la
// consola cuando se llame.
function saludo() {
    console.log('Hola chic@s de programacion estructurada');
}
saludo()

//---------------ejercicio 2--------------
// 2. Crea una función llamada sumar que tome dos números como parámetros y
// devuelva la suma de esos números.
function suma(a, b) {
    return a + b
}

console.log(suma(5, 3))


//---------------ejercicio 3--------------
// 3. Crea una función llamada resta que tome dos números como parámetros y
// devuelva la resta de esos números.
function resta(num1, num2) {
    return num1 - num2
}

console.log(resta(18, 4))


//---------------ejercicio 4--------------
// 4. Crea una función llamada multiplicar que tome dos números como
// parámetros y devuelva la multiplicación de esos números.

function multiplicacion(a, b) {
    return a * b
}

console.log(multiplicacion(5, 10))


//---------------ejercicio 5--------------
// 5. Escribe una función llamada calcularAreaRectangulo que tome la longitud
// y la anchura de un rectángulo como parámetros y devuelva su área.

function calcularAreaRectangulo(longitud, anchura) {
    return longitud * anchura
}

console.log(calcularAreaRectangulo(5, 4))



//---------------ejercicio 6--------------
// 6. Crea una función llamada NumeroPar que tome un número como parámetro
// y devuelva true si es par y false si es impar

function numeroPar(numero) {
    return numero % 2 == 0
}
console.log(6)
console.log(5)


//---------------ejercicio 7--------------
// 7. Crea una función llamada obtenerCalificacion que tome una puntuación
// como parámetro, en un rango del 1 al 10, y devuelva una calificación
// descriptiva de acuerdo con la siguiente escala:

function obtenerCalificacion(puntuación) {
    if (puntuación >= 9 && puntuación <= 10) {
        return "excelente"
    } else if (puntuación >= 8 && puntuación < 9) {
        return "Muy bueno"
    } else if (puntuación >= 7 && puntuación < 8) {
        return "Bueno"
    } else if (puntuación >= 6 && puntuación < 5) {
        return "Regular"
    } else if (puntuación >= 5 && puntuación < 6) {
        return "Deficiente"
    }else{
        return 'Puntuacion no valida'
    }
}

console.log(obtenerCalificacion(8.5))
console.log(obtenerCalificacion(4))
console.log(obtenerCalificacion(9.5))
console.log(obtenerCalificacion(100))