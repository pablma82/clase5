function formularioCaja(){
    let datosCliente = document.getElementById("nombreDelCliente").value
    let tipoCaja = document.getElementById("MaterialDeLaCaja").value
    
    let seleccionRadio = document.getSelection(input = "radio").value

    alert(datosCliente+tipoCaja+seleccionRadio)
}
