/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let nro;
	let sumaneg;
	let sumapos;
	let cantneg = 0;
	let cantpos = 0;
	let promneg = 0;
	let prompos = 0;
	let cantcero = 0;
	let cantpar = 0;	
	let rta;
	do {
		nro = parseInt(prompt("Ingrese un numero"))
		if (nro < 0) {
			sumaneg = nro + nro
			cantneg++
			promneg=sumaneg/cantneg		}
		else if (nro > 0) {
			sumapos = nro + nro
			cantpos++
			promepos=sumapos/cantpos		}		
		if (nro % 2 == 0 || nro == 0) {
			cantpar++
			cantcero++				}
		rta = prompt("desea continuar? punto(.) = si /sino cualquier tecla");
	}
	while (rta == ".")
	document.writeln("la suma de negativos es :" + sumaneg + "<br>");
	document.writeln("la suma de positivos es :" + sumapos + "<br>");
	document.writeln("la cantidad de negativos es :" + cantneg + "<br>");
	document.writeln("la cantidad de positivos es :" + cantpos + "<br>");
	document.writeln("La cantidad de ceros es "+cantcero+ "<br>");
	document.writeln("La cantidad de pares es "+cantpar+"<br>");
	document.writeln("El promedio de los negativos es "+ promneg + "<br>");
	document.writeln("El promedio de los positivos es "+ prompos + "<br>");
	document.writeln("La diferencia entre neg y pos es "+(sumaneg+sumapos) + "<br>");

}//FIN DE LA FUNCIÓN