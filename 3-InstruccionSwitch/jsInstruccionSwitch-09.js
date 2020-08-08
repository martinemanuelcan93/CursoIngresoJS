function mostrar() {
	let estac = document.getElementById("txtIdEstacion").value;
	let dest = document.getElementById("txtIdDestino").value; //aumento es ==+ 20%
	let base = 15000;
	switch (dest) {
		case "Bariloche":
			if (estac == "Primavera" || estac == "Otoño") {
				alert("primavera otoño " + (base + base * 0.1));
			}
			else if (estac == "Verano") {
				alert(base - (base * 0.2));
			}
			else {
				alert("tarifa " + (base + base * 0.2));
			}
			break;
		case "Cordoba": {
			if (estac == "Primavera" || estac == "Otoño")
				alert("tarifa" + base)
			else if ("Verano")
				alert(base + (base * 10 / 100))
			else ("Invierno")
			alert("tarifa" + base - (base * 0.1))
		}

			break
		case "Cataratas":
			if (estac = "Primavera" || estac == "Otoño")
				alert("tarifa" + base + (base * 10 / 100))
			else if ("Verano")
				alert(base + (base * 10 / 100))
			else ("Invierno")
			alert("tarifa" - base - (base * 0.1))
			break
		case "Mar del plata":
			if (estac = "Primavera" || estac == "Otoño")
				alert("tarifa" + base - (base * 10 / 100))
			else if ("Verano")
				alert(base + (base * 20 / 100))
			else ("Invierno")
			alert("tarifa" - base - (base * 0.2))
			break
	}

}
//FIN DE LA FUNCIÓN