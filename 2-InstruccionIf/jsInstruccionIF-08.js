function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value)
	let estadocivil = (document.getElementById("estadoCivil").value)

	if (edad >= 18 || estadocivil == ("soltero")) 
	{	
		alert("Es mayor y esta soltero sin apuros.");
	}

	


}//FIN DE LA FUNCIÓN