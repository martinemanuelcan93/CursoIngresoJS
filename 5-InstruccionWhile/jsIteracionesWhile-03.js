/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let key = prompt("ingrese el número clave.");

	while(key != "utn750")
	{
		key = prompt("ingrese el número clave.");
	}
	alert("clave correcta!")
}//FIN DE LA FUNCIÓN
