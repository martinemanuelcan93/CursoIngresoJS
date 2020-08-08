function mostrar()
{
	//tomo el mes
	var mesDelAño =document.getElementById("txtIdMes").value;
	switch(mesDelAño){
	case "Febrero" :alert("tiene 28 dias")
	break;
	case "Enero":
	case"Marzo" :
	case "Mayo" :
	case"Julio" : 
	case"Setiembre":
	case"Diciembre":alert("tiene 31 dias")
	break;
	default        :alert("tienen 30 dias")
	break;}}
	//FIN DE LA FUNCIÓN