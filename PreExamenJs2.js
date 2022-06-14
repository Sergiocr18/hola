"use strict";

const inputNom = document.getElementById("inputNom");
const inputIdentifica = document.getElementById("inputIdentifica");
const inputPreu = document.getElementById("inputPreu");

let Productes = [];

class Producto {
	constructor(nom, identifica, preu) {
		this.nom = nom;
		this.identifica = identifica;
		this.preu = preu;
		Productes.push(this);
		muestreoDeElProductoPreu(Productes);
	}
}

function muestreoDeElProductoPreu() {
	let productes2 = [].concat(Productes);
	productes2.sort((a, b) => {
		if (a.preu > b.preu) {
			return 1;
		}
		if (a.preu < b.preu) {
			return -1;
		}
		return 0;
	});
	console.table(productes2);
}
function mostrarProductesNom() {
	let Productes2 = [].concat(Productes);
	Productes2.sort((a, b) => {
		if (a.nom > b.nom) {
			return 1;
		}
		if (a.nom < b.nom) {
			return -1;
		}
		return 0;
	});
	console.table(Productes2);
}
function mostrarProductesIdentifica() {
	let Productes2 = [].concat(Productes);
	Productes2.sort((a, b) => {
		if (a.identifica > b.identifica) {
			return 1;
		}
		if (a.identifica < b.identifica) {
			return -1;
		}
		return 0;
	});
	console.table(Productes2);
}

function CrearElProducte() {
	let nom = inputNom.value;
	let identifica = inputIdentifica.value;
	let preu = inputPreu.value;
	let booleanNom, booleanPreu;
	booleanNom = booleanPreu = false;
	if (nom != "") {
		booleanNom = true;
	}
	if (identifica == "") {
		identifica = AlfanumericoAleatorio();
	}
	if (preu != "") {
		preu = preu.replaceAll(",", ".");
		if (!isNaN(preu)) {
			booleanPreu = true;
		}
	}
	console.log(nom + " " + identifica + " " + preu);
	if (booleanNom && booleanPreu) {
		new Producto(nom, identifica, preu);
	} else {
		//todo: mostrar algo un poco mejor
		// console.log("ERROR: no se pudo crear el producto");
	}
}
function AlfanumericoAleatorio(largo = 5) {
	let characters =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let result = "";
	let lengthCharacters = characters.length;
	for (let i = 0; i < largo; i++) {
		result += characters.charAt(Math.floor(Math.random() * lengthCharacters));
	}
	//todo comprobar que el "result" no existe en la lista
	return result;
}

// console.log(AlfanumericoAleatorio());
//testing
new Producto("abc", "ghhgh", 987);
new Producto("aaa", "asdda", 231);
new Producto("fdf", "cvbcv", 542);
new Producto("cvb", "bbbhg", 342);

// console.assert();
