function mostrar()

{
	let nro
	let acu=0;
	let conta=0

	while(conta <5){
		nro= parseInt(prompt("Ingrese un numero: "));
		acu = acu + nro // se le suma una variable
		conta = conta + 1 //se le suma una constante		
	}	
	document.getElementById("txtIdSuma").value=acu
	document.getElementById("txtIdPromedio").value=acu/5
}
//FIN DE LA FUNCIÓN