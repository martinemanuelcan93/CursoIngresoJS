/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let flag=0;
	let nro;
	let max=0;
	let min;
	let seguir;	
	do {
		nro = parseInt(prompt("ingrese un numero"))		
		if (flag == 0 || nro>max) {
			max = nro;}		
		if(flag == 0 || nro<max){
			min = nro;
			flag=1}
		seguir = prompt("desea continuar?");	
	} 
	while (seguir == "si"); 
	document.getElementById("txtIdMaximo").value=max;
	document.getElementById("txtIdMinimo").value=min;

	} //FIN DE LA FUNCIÓN