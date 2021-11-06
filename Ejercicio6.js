function isPair ( num ) {

    if( num % 2 == 0){
        return 'Par';
    }

    return 'Impar';
}

let userInput;
let output;

userInput = prompt('Introduzca un numero');

output = isPair(userInput);
console.log('El numero es:', output);
