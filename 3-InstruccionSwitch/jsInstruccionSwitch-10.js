function mostrar() {
	let est = document.getElementById("txtIdEstacion").value;
	let dest = document.getElementById("txtIdDestino").value;

	/*switch (est) {
		case "Invierno":
			if (dest == "Bariloche")
				alert("Se viaja")
			else
				alert("No se viaja")
			break
		case "Verano":
			if (dest == "Mar del plata" || dest == "Cataratas")
				alert("viajamos")
			else 
				alert("No se viaja")
			break
		case "Otoño":
			alert("Se viaja")
			break
		case "Primavera":
			if (dest !== "Bariloche")
				alert("Se viaja")
			break

	}*/
	switch (est) {
		case "Invierno":
			if (dest == "Bariloche")
				alert("Se viaja")
			else switch (dest) {
				case "Mar del plata":
					alert("no se viaja porque el mar es peligroso")
				break	
				case "Cataratas":
					alert("no se viaja porque no hay caudal de agua ")
				break		
				default:
				alert("no se viaja ")	
			}
			break
		case "Verano":
			if (dest == "Mar del plata" || dest == "Cataratas")
				alert("viajamos")
			else
				alert("No se viaja")
			break
		case "Otoño":
			alert("Se viaja")
			break
		case "Primavera":
			if (dest !== "Bariloche")
				alert("Se viaja")
			break

	}



}//FIN DE LA FUNCIÓN