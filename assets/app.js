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
    if(num===undefined) console.warn('No digitaste un número.')
    let cont=0;
    for (let i = 1; i<=num; i++) if(num%i===0)cont++;
    (cont===2)
    ?console.log(`El numero "${num}" es Primo`)
    :console.log(`El numero "${num}" NO es Primo`)
}
prim(11)

//--------------------------------------------------------------------------------------------

//E13S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 13:")



//--------------------------------------------------------------------------------------------

//E14S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 14:")
