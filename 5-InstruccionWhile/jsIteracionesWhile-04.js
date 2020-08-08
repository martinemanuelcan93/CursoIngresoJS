/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(num>0 && num<10){

		num=parseInt(prompt("Bien ingresa uno nuevo"));

	}
	alert("Solo dentro del rango, intentalo de nuevo")
	
}//FIN DE LA FUNCIÓN