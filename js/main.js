function captura() {
    let nombre = document.getElementById("nombreMarca").value;
    let correo = document.getElementById("correoElect").value;
    let message = document.getElementById("dejaMensaje").value;

    if (nombre == "") {
        alert("Es obligatorio digitar el nombre");
    
    } else {
        if (correo == "") {
            alert("Es obligatorio digitar una dirección de correo electronico");
           
    } if (message == "") {
        alert("Es obligatorio digitar un mensaje");
      
    } else
{
    console.log(nombre+ " " +correo+ " " +dejaMensaje);

} 
    }
}
