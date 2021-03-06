/*Ejercicios Basicos JS Nivel 1
    12.Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no.Ejemplo: miFuncion(7) devolverá "true".
    13.Programa una función que determine si un número es par o impar.Ejemplo: miFuncion(29) devolverá Impar.
    14.Programa una función para convertir grados Celsius a Fahrenheit y viceversa.Ejemplo: miFuncion(0,"C") devolverá 32°F.
*/

//Soluciones:

//--------------------------------------------------------------------------------------------

//E12S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 12:")

function primo (num) {
    let cont=0;
    for (let i = 1; i<=num; i++) {
        if(num%i===0){
            cont++
        }
    }
    (cont===2)
    ?console.log('el numero es primo')
    :console.log('el numero no es primo')
}
primo(12)

//E12S2 Arrow y Op.Ternario

const prime = num =>{
    let cont=0;
    for (let i = 1; i<=num; i++) if(num%i===0)cont++;
    (cont===2)
    ?console.log(`El numero "${num}" es Primo`)
    :console.log(`El numero "${num}" NO es Primo`)
}
prime(8)

//E12S3 similar with validadion
const prim = (num=undefined) =>{
    if(num===undefined) return console.warn('No digitaste un número.')
    let cont=0;
    for (let i = 1; i<=num; i++) if(num%i===0)cont++;
    (cont===2)
    ?console.log(`El numero "${num}" es Primo`)
    :console.log(`El numero "${num}" NO es Primo`)
}
prim()

//E1S4 moreValidations and another "for"

const numeroPrimo = (num=undefined) => {
    if (num===undefined) return console.warn("No ingresaste un número");
    if (typeof num !== "number") return console.error(`El valor "${num}" no es un numero`);
    if(num===0) return console.error("El numero no puede ser cero");
    if(Math.sign(num)===-1) return console.error("El numero no puede ser negativo");

    let divisible =false;

    for (let i=2; i<num; i++){
        if((num%i)===0){
            divisible = true;
            break;
        }
    }
    return(divisible)
    ?console.log(`El numero ${num} NO es primo`)
    :console.log(`El numero ${num} es primo`)
}
numeroPrimo(11)

//--------------------------------------------------------------------------------------------

//E13S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 13:")

function impar(num){
    if(num%2===1){
        console.log('El numero es impar')
    }
}
impar(5)

//E13S2.Arrow validation and ternary operator

const odd = (num="undefined") => {
    if(num==="undefined") return console.warn('No ingresaste un número');
    (num%2===1)
    ?console.log(`El número "${num}" es Impar`)
    :console.log(`El número "${num}" es Par`)
}
odd(1)

//--------------------------------------------------------------------------------------------

//E14S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 14:")

function CelciusFarenheit(val=undefined,degree="") {
    if (val===undefined) return console.warn('No digitaste un valor')
    if (degree === "c"||degree === "f"||degree === "C"||degree === "F")
    {  (degree===("c"||"C"))
        ?console.log(`"${val}"°C son iguales a "${(val*1.8)+32}"°F`)
        :console.log(`"${val}"°F son iguales a "${(val-32)/1.8}"°C`)}
    else{
        return console.log('Debes digitar "C" o "F"')
    }
}
CelciusFarenheit(24,"c")

//E14S2 More validations
const convertirGrados = (grados=undefined, unidad=undefined) =>{
    if (grados===undefined) return console.warn('No digitaste un valor')
    if (typeof grados !== "number") return console.error(`El valor "${grados}" no es un numero`);
    if (unidad === undefined) return console.warn('No ingresaste el tipo de grados a convertir');
    if (typeof unidad !== "string") return console.error(`El valor "${unidad}" no es texto`);
    if (unidad.length !== 1 || !/(C|F)/i.test(unidad)) return console.warn("Valor de unidad no reconocido");

    (unidad===("c"||"C"))
    ?console.log(`"${grados}"°C son iguales a "${Math.round((grados*1.8)+32)}"°F`)
    :console.log(`"${grados}"°F son iguales a "${Math.round((grados-32)/1.8)}"°C`)
}
convertirGrados(2,"F")