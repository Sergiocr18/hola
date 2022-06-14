// Libreria
// 10 libros
// con titulo,autor
// alert("kkkkk");
let listaPersonas = [];

class Persona {
	constructor(name) {
		this.nombre = name;
		this.dni = Car.generateMatricula();
		listaPersonas.push(this);
	}
}

class Car {
	constructor(marca, propietario) {
		this.brand = marca;
		this.propietario = propietario;
		this.matricula = Car.generateMatricula();
		this.pasajeros = [];
	}

	show() {
		if (this.brand == "Seat") {
			return "es una marca X";
		} else {
			return this.brand + " " + this.matricula;
		}
	}
	addPasajeros(pasajero) {
		if (this.pasajeros.includes(pasajero)) {
			this.pasajeros.remove(pasajero); //eliminar
		} else {
			this.pasajeros.push(pasajero); //añadir
		}
	}

	printJSON(pasajero) {
		return JSON.stringify(this);
	}

	table() {
		console.table([[this.brand], [this.propietario, this.propietario.nombre]]);
	}

	static generateMatricula() {
		return Math.floor(Math.random() * (9999 + 1 - 1000) + 1000);
	}
}

let persona1 = new Persona("Juan");
let persona2 = new Persona("Pedro");
let persona3 = new Persona("Sandra");

// Car.generateMatricula; //Car=llama a la clase

coche1 = new Car("Seat", persona1); //crear coche
coche2 = new Car("Ford", persona2); //crear coche
coche3 = new Car("Ford", persona3); //crear coche

console.log(coche1.brand + " " + coche1.matricula);
console.log(coche2.brand + " " + coche2.matricula);
console.log(coche3.brand + " " + coche3.matricula);

coche1.addPasajeros(persona1);
coche1.addPasajeros(persona2);
coche1.addPasajeros(persona3);
console.log(coche1.pasajeros);
console.log(coche1.printJSON());
console.log(coche1);
console.log("");
coche1.table();
console.log("");

console.log(coche1.show());
console.log(coche2.show());
console.log(coche3.show());

function myFunction(params) {
	const node = document.createElement("li");
	node.innerHTML = "Whater";
	document.getElementById("myList").appendChild(node);
}
