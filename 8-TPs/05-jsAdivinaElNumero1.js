/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let nroSecreto;
let nroUsuario;
let conteo = 0

function comenzar() {
  nroSecreto = parseInt(Math.random() * 10);
  alert("Que empiecen las apuestas... numero generado.")
}
function verificar() {
  nroUsuario = document.getElementById("txtIdNumero").value;
  if (nroUsuario > 0 && nroUsuario < 100) {
    conteo = conteo + 1
    document.getElementById("txtIdIntentos").value= conteo
    if (nroUsuario > nroSecreto) {
      alert("mmm te pasaste un poco")
    }
    else if (nroUsuario < nroSecreto) {
      alert("Te falta un poco mas")
    }
    else if (nroUsuario == nroSecreto) {
      alert("Felicitaciones era el " + "<" + nroSecreto + ">" + " y en tan solo " + conteo + " intentos!")
    }    
    else {
      alert("Ingresa un nro vàlido");
    }
  }
}