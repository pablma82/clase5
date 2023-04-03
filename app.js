//Ej. 9 - Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html.

function conversorADolar(){
    let pesosIngresados = document.getElementById("pesos").value
    let conversionADolar = pesosIngresados/300
    alert("El valor ingresado son: "+ conversionADolar +" Dolares")
}

//Ej. 10 - Generar la inversa del ejercicio anterior (de pesos a dólares).
function conversorAPesos(){
    let dolaresIngresados = document.getElementById("dolar").value
    let conversionAPesos = dolaresIngresados*300
    alert("El valor ingresado son: "+ conversionAPesos +" Pesos")
}

//EJ. 11 - Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.
function conversorAGrados(){
    let gradosIngresados = document.getElementById("grados").value
    let conversionAGrados = ((gradosIngresados*9)/5)+32
    alert("El valor ingresado equivale a: "+ conversionAGrados +"  Grados Farenheint")
}