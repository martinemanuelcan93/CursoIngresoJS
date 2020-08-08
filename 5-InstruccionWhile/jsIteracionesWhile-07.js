/*
Al presionar el botón: pedir  números  hasta que el USUARIO QUIERA. 
E informar la suma acumulada y el promedio.
*/
function mostrar() {
	let nro;
	let acu = 0;
	let contador = 0
	do {
		nro = parseInt(prompt("Ingrese un numero: "));		
		acu = acu + nro // se le suma una variable		
		contador = contador + 1
		rta = prompt("Quiere seguir?")
	}
	while (rta == "si"); 
	document.getElementById("txtIdSuma").value = acu
	document.getElementById("txtIdPromedio").value = acu / contador

}//FIN DE LA FUNCIÓN