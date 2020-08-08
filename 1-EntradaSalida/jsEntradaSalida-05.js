/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()

{	
	
	var name;
	var year;


	name = document.getElementById("txtIdNombre").value;
	year = document.getElementById("txtIdEdad").value;
	
	/*alert("su nombre es  "+name+" y tiene "+year+" años");*/


	alert(`Su nombre es ${name} y tiene ${year} años `)
	
}

