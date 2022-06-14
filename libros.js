"use strict";

let listaLibros = [];

class Libro {
	constructor(sn, titulo, autor, edicion, precio = 0, tematica = []) {
		this.sn = sn;
		this.titulo = titulo;
		this.autor = autor;
		this.edicion = edicion;
		this.precio = precio;
		this.tematica = tematica; //generar()
		listaLibros.push(this);
		this.pintarLibrosEnLaTabla();
	}
	pintarLibrosEnLaTabla() {
		let boton_eliminar = document.createElement("button");
		boton_eliminar.innerHTML = "Remove";
		boton_eliminar.value = "libro_" + this.sn;
		boton_eliminar.addEventListener("click", function () {
			document.getElementById(this.value).remove(); //.innerHTML = "";
			//todo:eliminar de la lista
		});
		let td_sn = document.createElement("td");
		let td_titulo = document.createElement("td");
		let td_autor = document.createElement("td");
		let td_edicion = document.createElement("td");
		let td_precio = document.createElement("td");
		let td_tematica = document.createElement("td");
		let td_eliminar = document.createElement("td");

		td_sn.innerHTML = this.sn;
		td_titulo.innerHTML = this.titulo;
		td_autor.innerHTML = this.autor;
		td_edicion.innerHTML = this.edicion;
		td_precio.innerHTML = this.precio + "€";
		td_tematica.innerHTML = Libro.pintarLasTematicasFormateadas(this.tematica);
		td_eliminar.appendChild(boton_eliminar);

		let tr = document.createElement("tr");
		tr.id = "libro_" + this.sn;
		tr.appendChild(td_sn);
		tr.appendChild(td_titulo);
		tr.appendChild(td_autor);
		tr.appendChild(td_edicion);
		tr.appendChild(td_precio);
		tr.appendChild(td_tematica);
		tr.appendChild(td_eliminar);

		let tbody = document.getElementById("tabla1");
		tbody.appendChild(tr);
	}
	static pintarLasTematicasFormateadas(array) {
		let acumulado = "";
		for (let i = 0; i < array.length; i++) {
			acumulado += array[i] + ", ";
		}
		return acumulado.slice(0, -2);
	}

	pintarLasTematicasFormateadasLibro() {
		let acumulado = "";
		for (let i = 0; i < this.length; i++) {
			acumulado += array[i] + ", ";
		}
		return acumulado.slice(0, -2);
	}
	//console.table()
	//Odernar
	pintarEnConsola() {
		console.table([
			[
				this.sn,
				this.titulo,
				this.autor,
				this.edicion,
				this.precio,
				this.pintarLasTematicasFormateadasLibro(),
			],
		]);
	}
	toJSON() {
		return JSON.stringify({
			sn: this.sn,
			titulo: this.titulo,
			autor: this.autor,
			edicion: this.edicion,
			precio: this.precio,
			tematica: this.pintarLasTematicasFormateadasLibro(),
		});
	}
}

new Libro("ABC123", "Muse", "Canelita", 3, 700, [
	"terror",
	"aventura",
	"drama",
]);
new Libro("BCD234", "JS", "Mascarilla", 18, 0.21, ["romance", "comedia"]);
new Libro("CDE345", "HTML", "London", 25, 0.78, ["tragico", "accion"]);

function funcionCrear() {
	let sn = document.getElementById("S/N").value;
	let titulo = document.getElementById("Titulo").value;
	let autor = document.getElementById("Autor").value;
	let edicion = document.getElementById("Edicion").value;
	let precio = document.getElementById("Precio").value;
	let tematica = document.getElementById("Tematica").value;

	new Libro(sn, titulo, autor, edicion, precio, tematica);
}
document.getElementById("agregar").addEventListener("click", funcionCrear);

// let uno = listaLibros[0].toJSON;
// let dos = JSON.parse;
// console.table([JSON.parse(uno)]);
// console.log(listaLibros);
// console.table(listaLibros[0].tematica);

let tematica =["terror","aventura","drama",]

tematica.sort((a , b) =>{
	if(a==b){
		return 0
	}
	if (a<b) {
		return -1
	}else{
		return 1
	}
})
console.log(tematica);

// console.log(Libro.pintarLasTematicasFormateadas(listaLibros[0].tematica));
// console.log(listaLibros[0].pintarLasTematicasFormateadasLibro());
