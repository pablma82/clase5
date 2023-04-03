//Ej. 1 - Crea un array que contenga el nombre de cinco colores escritos como strings
const colores = ['naranja', 'verde', 'azul', 'marron', 'rojo']

//Ej. 2 - Guarda en una variable el tercer elemento del array del ejercicio anterior.
let colorGuardado=(colores[2])

//Ej. 3 - Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.
console.log(colores [0]);

//Ej. 4 - Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().
function NumeroAzar(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(NumeroAzar(99));

//Ej. 5 - Rellena un array con los números del 1 al 10. Muéstralo por la consola.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

//Ej. 6 - Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola
const NumerosAlea = [2,5,7, 11, 13, 17, 19, 23, 29, 31, 37, 43, 47, 51, 53, 57, 59]
console.log(NumerosAlea)

//Ej. 7 -  Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
const NumerosAleaCopy = NumerosAlea.slice()
NumerosAleaCopy[2] = 8
NumerosAleaCopy[5] = 16
NumerosAleaCopy[8] = 27
NumerosAleaCopy[11] = 41
NumerosAleaCopy[14] = 54
NumerosAleaCopy[16] = 71
console.log(NumerosAleaCopy)

//Ej. 8 - Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio.
let resultado = "";
do {
    let cadena = prompt("Introduce una cadena");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea continuar?"));
console.log(resultado);

const resultadoArray = [resultado]
console.log(resultadoArray)


