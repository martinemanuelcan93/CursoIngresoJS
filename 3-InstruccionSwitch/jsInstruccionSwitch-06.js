function mostrar()
{
	//tomo la hora
	let  hora=parseInt(document.getElementById("txtIdHora").value);

	if (hora>=7 && hora<= 11 ) {alert ("ees de mañana");}
	else if(hora>=12 && hora<=19) {alert("es tarde");}
	else if((hora>=0 && hora<=6) ||hora>=20 && hora<=24)
	{alert("es noche");}
	else alert("no existe esa hora")


	

}//FIN DE LA FUNCIÓN