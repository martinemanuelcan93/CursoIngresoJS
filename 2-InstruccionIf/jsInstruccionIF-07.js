function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value)
	//if(edad >= 18 && estadocivil == "Soltero")
	let estadocivil = (document.getElementById("estadoCivil").value)

	if (edad < 18 && estadocivil != ("soltero")) 
	{
	
		alert("Es muy pequeño para NO ser soltero.");
	}

	
	


}//FIN DE LA FUNCIÓN