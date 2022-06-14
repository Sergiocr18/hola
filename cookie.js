document.getElementById("botonCrear").addEventListener("click", funcion1);
function funcion1() {
	document.getElementById("preg1").style.visibility = "visible";
}

// document.getElementById("botonSelFecha").addEventListener("click", funcion2);
// function funcion2() {
// 	document.getElementById("fecha").style.visibility = "visible";
// }

document.getElementById("botonSelDias").addEventListener("click", funcion3);
function funcion3() {
	document.getElementById("cantidad").style.visibility = "visible";
}

document.getElementById("createCookie2").addEventListener("click", funcion5);
function funcion5() {
	document.getElementById("fecha").style.visibility = "visible";
	//	setCookie(nameCookie, document.getElementById("valueCookie").value, 40);
	// console.log("Created cookie="+ getCookie("nameCookie"))
}
document.getElementById("leer contenido").addEventListener("click", funcion6);
function funcion6() {
	console.log(select.value);
	//pintarlo bonito
}

document.getElementById("modificar").addEventListener("click", funcion7);
function funcion7() {
	console.log(select.value);
	document.getElementById("preg1").style.visibility = "visible";
	let array = select.value.split("=");
	console.log(array);
	console.log(array[0]);
	console.log(array[1]);
	document.getElementById("nameCookie").value = array[0];
	document.getElementById("valueCookie").value = array[1];
	document.getElementById("createCookie2").innerHTML = "Modificar cookie";
}

document.getElementById("borrar").addEventListener("click", funcion8);
function funcion8() {
	// console.log(select.value).split("=")[0];
	setCookie(select.value.split("=")[0], "", -1);
	listCookies();
	//pintarlo bonito
}
