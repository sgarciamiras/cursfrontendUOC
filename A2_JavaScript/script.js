// Funciones
function hacerSuma(num1, num2) {
    return num1 + num2;
}

function esPrimo(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
}

function comprobarPrimos(num1, num2) {
    let resultado='';
    if ((!esPrimo(num1)) && (!esPrimo(num2)) && (num1!=num2)) {
        resultado += 'El ' + num1 + ' no es primo y el '+ num2 + ' no es primo';
    } else if ((esPrimo(num1)) && (!esPrimo(num2)) && (num1!=num2)) {
        resultado += 'El ' + num1 + ' es primo y el '+ num2 + ' no es primo';
    } else if ((!esPrimo(num1)) && (esPrimo(num2)) && (num1!=num2)) {
        resultado += 'El ' + num1 + ' no es primo y el '+ num2 + ' es primo';
    } else if ((num1==num2) && (!esPrimo(num1))) { 
        resultado += 'El ' + num1 + ' no es primo';
    } else if ((num1==num2) && (esPrimo(num1))) { 
        resultado += 'El ' + num1 + ' es primo';
    } 
    else {
        resultado += 'El ' + num1 + ' es primo y el '+ num2 + ' es primo';
    }
    return resultado;
}

function esPar(numero) {
    if(numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

function comprobarPares (num1, num2) {
    let resultado='';
    if ((!esPar(num1)) && (!esPar(num2)) && (num1!=num2)) {
        resultado += 'El ' + num1 + ' es impar y el '+ num2 + ' es impar';
    } else if ((esPar(num1)) && (!esPar(num2)) && (num1!=num2)) {
        resultado += 'El ' + num1 + ' es par y el '+ num2 + ' es impar';
    } else if ((!esPar(num1)) && (esPar(num2)) && (num1!=num2)) {
        resultado += 'El ' + num1 + ' es impar y el '+ num2 + ' es par';
    } else if ((num1==num2) && (!esPar(num1))) { 
        resultado += 'El ' + num1 + ' es impar';
    } else if ((num1==num2) && (esPar(num1))) { 
        resultado += 'El ' + num1 + ' es par';
    } 
    else {
        resultado += 'El ' + num1 + ' es par y el '+ num2 + ' es par';
    }
    return resultado;
}

function rangoPares(num1, num2) {
    let resultado='';
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            // Comprobar si el número es par
            if (i % 2 === 0) {
                // Imprimir número par
                resultado += i + ' ';
            }
        }
    }
    return resultado;
}

function rangoImpares(num1, num2) {
    let resultado='';
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            // Comprobar si el número es impar
            if (i % 2 !== 0) {
                // Imprimir número impar
                resultado += i + ' ';
            }
        }
    }
    return resultado;
}

// Pedir al usuario que introduzca los dos números
let num1 = parseInt(prompt("Introduce el primer número entre 1 y 50:"));
let num2 = parseInt(prompt("Introduce el segundo número entre 1 y 50:"));

// Comprobción del rango permitido
if (num1 >= 1 && num1 <= 50 && num2 >= 1 && num2 <= 50) {
    
    let mostrar= 'La suma es: ';
    // Sumar
    mostrar += hacerSuma(num1, num2) + '\n';
    // Número primo o no
    mostrar += comprobarPrimos(num1,num2) + '\n';
    // Número par o impar
    mostrar += comprobarPares(num1,num2) + '\n';
    // Mostrar los pares del rango
    mostrar += rangoPares(num1, num2) + '\n';
    // Mostrar los impares del rango
    mostrar += rangoImpares(num1, num2) + '\n';
     //Números iguales
     if (num1==num2) {
        mostrar += 'Rango: ' + num1;
    }
    //Mostrar información
    alert(mostrar);

} else {
    // Si alguno de los números está fuera de rango, mostrar mensaje de error
    alert("Los valores introducidos deben de ser números enteros positivos entre 1 y 50.");
}
    


