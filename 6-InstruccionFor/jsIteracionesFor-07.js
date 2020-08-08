function mostrar() {
	let nro
	let contadordivisor = 0
	nro = prompt("Ingresa el numero que quieras")

	for (let i = 0; i <= nro; i++) {
		if (nro % i == 0) {
			contadordivisor++
			document.writeln("El numero " + i + " es un divisor de " + nro + "<br>")
		}
	}
}
