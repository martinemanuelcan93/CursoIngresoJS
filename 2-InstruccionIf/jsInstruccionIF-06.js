function mostrar()
{
	//tomo la edad  
let edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad >= 18) {
	alert("es adulto")
	}
else if (edad >= 13 || edad <= 17) {
	alert ("adolescente");
}
else if (edad < 13)
{
	alert("usted es niño")
}

}


//FIN DE LA FUNCIÓN