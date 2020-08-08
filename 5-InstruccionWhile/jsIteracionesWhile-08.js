/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let rta="si";
	let pos =0;
	let neg=-1;	
		
	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado >= 0) {
			pos = pos + numeroIngresado;
		}
		else if(numeroIngresado <0) {
			neg = neg * numeroIngresado;
		}
		rta = prompt("Quiere ingresar otro numero ?");
	} while (rta == "si");

	document.getElementById("txtIdSuma").value = pos;
	document.getElementById("txtIdProducto").value = neg;
}//FIN DE LA FUNCIÓN