// al presionar el botón pedir un número.Informar si el numero es PRIMO o no.

function mostrar() {
	let nro
	let acu = 0
	do {		
		nro = prompt("Ingresa el numero que quieras")
		nro = prompt("ingresa un numero valido !!")
	}
	while (nro <= 1 || isNaN(nro))
	alert
	for (let conteo = 0; conteo <= nro; conteo++) {
		if (nro % conteo == 0)//condicion de divisores
		{
			acu++
		}
	}
	if (acu ==2) {
		alert("Es PRIMO");
	}
	else {
		alert(" no es PRIMO");
	}
}

// usar isNaN
/*document.writeln("los divisores son"+ conteo+"<br>")
		     document.writeln("el total es"+ acu)*/