function mostrar()
{
	let nro
	let pares = 1
	let cantidadpares=0
	nro= parseInt(prompt("ingrese el numero de repeticiones"))

	for(pares;pares<nro;pares++){
		
		if(pares%2==0){
			document.writeln(" los pares  son el "+pares+"<br>")
			cantidadpares++
		}	
		

		
	}
	document.writeln("la cantidad de pares es "+ cantidadpares)




}//FIN DE LA FUNCIÓN