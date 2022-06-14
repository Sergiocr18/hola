# Este es el repositorio de ejercicios de JS

# sdfse

La funcion `prompt()` es para solicitar datos al usuario

`!` le das la vuelta a la pregunta

### Console

`if` (condicion){ejecucion} pregunta varias cosas

`funcion "cosa"`(parametros){ejecucion}

Array[]

(condicion)

valor1 == valor2
valor1 != valor2
valor1 >= valor2
valor1 <= valor2
valor1 < valor2
valor1 > valor2
valor1 === valor2
valor1 !== valor2 ESTRICTAMENTE DIFERENTE LO CONTRARIO DE LOS 3===
valor1 ? valor 2 OPERADOR TERNARIO

`Operadores de 2 grado`

= let $varasd = 8
+=
-=
\*=
/=
%=
\*\*=

`Operadores Bitwise`

& AND
| OR
~ NOT
^ XOR
<< left shift

> > right shift
> >
> > > unsaigned right shift
> > > //3==5 ?? coonsole.log("asd")
> > > //console.log(0101 >> 1);
> > > //console.log(5 >> 1); te lo pasa a binario

[ir a asd.md](asd.md)
[ej1 js] (ej1)

`console.log()`

`console.warn()`

`console.error()`

`console.info()`

### funciones

`\t` hace tabulaciones

`\n` hace un salto de linea

`\r` otra manera de salto de linea y y tambien sirve para que se coloque al principio de linea

`isNaN()` determina cuando el valor es numero o no

`alert()` mostrar mensaje

`document text` imprime en pantalla

`prompt` sirve para solicitar datos al usuario

`ParseInt` es un método que analiza un valor como una cadena y devuelve el primer entero.

`toUpperCase` es un metodo para convertir las letras a mayuscula

`toLowerCase` es un metodo para convertir las letras a minuscula

`toPrecision` para redondear a 2 decimales /3 decimales, etc...

`Number("6")` transforma el texto en numero

`typeof`nos dice que es esa variable;
funcion para saber el tipo de variable -> string, float

`valueOf` practicamente lo mismo que la funcion typeof

`new Date`

`los mensajes que te pueden devolver`
string
number
undefined
NaN
boolean
Infinity
matrices[]
objetos{}
`primitivas`
int;
string;
boolean;
float;
`nuevas`
Int;
String;
Boolean;
Float;

`_var2` es una variable global
ejemplo de variable global \_PI=3.1416, const \_RA=5
poner variables comienza por let var7=25 que es una tipoligia
const \_var1=25
// var $var1 = 25;//

console.log("\n"); //salto de carro
console.log("\r"); //salto de carro raro
console.log("\t"); //tabulacion
console.log("\v"); //tabulacion vertical
console.log("\b"); //space
console.log("\f"); //avance form
//escapes= es para que printee
console.log('\"'); //
console.log("\'"); //
console.log("\`"); //
console.log("\\"); //
//operadores basicos
`+` //2 sumar

- restar

* multiplicar
  / dividir
  ++ = +1
  let $b=0
  $c=0
  console.log(5 + $b++);// despues de ejecutar
  console.log($b);
  console.log(5 + ++$c); //antes de ejecutar
  console.log($c);
  -- = -1
  \*\* Exponente
  % Modulo

      		let $var7 = 8 ** 2;
      		console.log($var7);

`head` importar archivos

`body` llamar archivo js

`button onclick` llamada de parte del usuario de js

`button onblur`

Poner siempre `let` cuando declares una variable

`scr`tal y como llegue el documento se ejecutara

`async` sleepear(quedarse dormido) toda la cargar hasta que el body se ha cargado.
PROBLEMA SI p.e hay una imagen que no se ejecuta nunca, que no se cargara nunca

`defer` igual que el async, la diferencia es que permite que todo lo demas se vaya cargando
y lo ultimo es el script

`innerHTML` sustituye el ID por el nombre "asd",es modificar el texto interno

`propiedades`

`length` = para saber el numero de elementos que tiene un array p.e.

## {} = indican que va haber objetos

# activadores de eventos # // Event Handlers

document.getElementsByClassName('negra rojo') se puede añadir una clase o varia clases

`slice`se puede acotar entre los numeros y puedes aplicar numeros negativos

`substring` es mas usado que el slice, pero no puedes usar numeros negativos y es menos costoso informaticamente

`padStart` rellena los espacio de antes de la palabra o numero; ej->con lo que quieras(5, "$")

`padEnd`rellena los espacios de despues de la palabra o numero

`trim` rellena espacios

`chartAt` señala una posicion en concreto

`chartCode` posicion concreta en la lista de UTF-8

`split` muestra la palabra ubicada en esa posicion

`indexOf` te da la posicion que ocupa

`switch` CASE 3 "condicion":**_ BREAK;
"A":_**
CASE TypeOff "NUMBER":\_\_\_
TypeOff"STR"
Default:\_\_\_\_

## corregir facil del examen js

// modo facil password

// const mayuscula = /[A-Z]/;
// const minuscula = /[a-z]/;
// const numero = /[0-9]/;
// const caracter = /[!@#\$%\^\&*\)\(+=._-]/;
// function letras(texto) {
// let var1 = false;
// let var2 = false;
// let var3 = false;
// let var4 = false;
// if (mayuscula.test(texto)) console.log("mayuscula"); var1=true
// if (mayuscula.test(texto)) console.log("minuscula"); var2=true
// if (mayuscula.test(texto)) console.log("numero"); var3=true
// if (mayuscula.test(texto)) console.log("caracter"); var4=true
// if (var1 && var2 && var3 && var4) {
// return true;
// }
// return false;
// };

## Arrays

### Funciones basicas

crear array
`const fruits = ["Banana", "Orange", "Apple", "Mango"];`

Convertir a texto
`.toString()`

### X

concatenar 2 arrays:

`let array3 = array1.concat(array2)`

`array1.concat(array2)`

`array1.concat(array2,array3)`

`array1.concat("texto")`

`array.splice(2,0,"a","b")`

##########################

necesitaremos un if crear una cookie
if(navigator.cookieEnabled){
//Se pueden crear
}
navegador conectado a internet = false es no

comprobar si la pagina es enabled = false

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>

`try`{pones lo quieras ejecutar, lo que sea}

`catch`(Document.Write){ECHO, Print, console.log, etc...}si falla el try, entra al catch
ERRO
ENK
`finally`{}

# Objetos JS

`math.abs()`me devolvera el valor absoluto
`math.asin()` da entre 0 y 165
`math.ceil()`valor redondealo al valor superior
`math.max()`el mayor entre 2 numeros
`math.min()`el menor de 2 numeros
`math.random()`genera cualquier numero entre 0 y 1 o de los numeros que pongas tu
ejemplos:

<script>
function generateRandomInt(min,max){
x = Math.floor((Math.random() *(max-min)) +min );
document.getElementById("demo").innerHTML = x
}
generateRandomInt(200,900)

</script>

`math.round()`redondea el numero mas cercano
`math.trunc()`quita todos los numeros decimales

# JSON

`stringify()`lo pasa de texto a objeto;
ejemplo:
texto "{ name: 'John', age: 31, city: 'New York' }"
objeto { name: "John", age: 31, city: "New York" };

`parse()` lo pasa de objeto a texto;
ejemplo:
objeto { name: "John", age: 31, city: "New York" };
texto "{ name: 'John', age: 31, city: 'New York' }";

######

VAR
CLASS
CODE
ASSERT
LOGS

`MVC` modelo vista controlador
Objetos HTML Code

#################################

`caja blanca`lo testeas cuando te sabes el codigo,
`caja negra` vas a ciegas, que no te sabes el codigo, haces los asserts ante de todo,testea un funcion que no conoces
primero se hace la caja negra y despues la caja blanca, la suma de todo te da la `caja gris`

`mdn` documentacion oficial le haces la prueba y puede salir error

# Pruebas de Usabilidad

`front-end` parte de la web que interactua con los usuarios

`back-end`parte que se conecta a la base de datos

`f.jest` hacer testeo

`Las pruebas de usabilidad`consisten en seleccionar a un grupo de usuarios de una aplicación y solicitarles que lleven a cabo las tareas para las cuales fue diseñada, en tanto el equipo de diseño, desarrollo y otros involucrados toman nota de la interacción, particularmente de los errores y dificultades con las que se ...
