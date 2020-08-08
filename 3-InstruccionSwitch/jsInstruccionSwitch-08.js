function mostrar()
{



	let destino = document.getElementById("txtIdDestino").value;

	if(destino =="Bariloche"||destino =="Ushuaia"){
	alert("Hace FRIO");}

	else if(destino == "Cataratas"||destino == "Mar del plata"){
	alert("Hace CALOR")}

	else{alert("El destino no esta contemplado");
	}


	

}//FIN DE LA FUNCIÓN















// esto " || "  es " O "