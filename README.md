# Este es el repositorio de ejercicios de JS

# sdfse

La funcion `prompt()` es para solicitar datos al usuario

`!` le das la vuelta a la pregunta

### Console

`if` (condicion){ejecucion}

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

`isNaN()` determina cuando el valor es NaN o no

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

`prim` rellena espacios

`chartAt` señala una posicion en concreto

`chartCode` posicion concreta en la lista de UTF-8

`split` muestra la palabra ubicada en esa posicion

`indexOf` te da la posicion que ocupa
