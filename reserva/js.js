function  mostrarAdultos(objeto_select) {
var numAdulto = objeto_select.value;
var padre =document.getElementById("adultos");
padre.innerHTML="";
	for (i=0; i<numAdulto;i++) {
		var objeto_input = document.createElement("input");
		objeto_input.type="text";
		objeto_input.className="nombres";
		objeto_input.placeholder="Introduzca el nombre " +(i+1);
		padre.appendChild(objeto_input);
	}
}
function  mostrarNinios(objeto_select) {
var numNinio = objeto_select.value;
var padre =document.getElementById("ninio");
padre.innerHTML="";
	for (i=0; i<numNinio;i++) {
		var objeto_input = document.createElement("input");
		objeto_input.type="number";
		objeto_input.className="edad";
		objeto_input.placeholder="Introduzca la edad del o los niños" +(i+1);
		padre.appendChild(objeto_input);	
	}
}
function Reservar() {
	var nAdulto = document.getElementById("cambia_adulto").value;
	var nNinio = document.getElementById("cambia_ninio").value;
	var nombre =document.getElementsByClassName("nombres");
	var edades =document.getElementsByClassName("edad");
	var Nombre="";
	var Edad="";
	for (i=0;i<nAdulto;i++) {
		Nombre=Nombre+"   "+nombre[i].value;

		}
		for (i=0;i<nNinio;i++) {
		Edad=Edad+" "+edades[i].value;
		}
		alert("Se hospedaran los adultos " + Nombre + " y los ninños con edades " + Edad);


}