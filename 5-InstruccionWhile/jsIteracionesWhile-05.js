/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {

	do {
		sex = prompt("Ingrese uno de los dos sexos", "En este campo");
	}
	while (!(sex == "f" || sex == "m"));

	//sex=document.getElementById("txtIdSexo").value; esto no hace falta


	;
}//FIN DE LA FUNCIÓN