function isPrime( num ) {
    let result;
    num <= 1 ? result = false : result = true;

    for ( let i = 2; num > i; i++ ) {
        if ( num % i == 0 ) { result = false; }
    }

    result == true ? result = 'primo' : result = 'no primo';

    return result;
}

userInput = prompt('Introduzca un numero');

output = isPrime(userInput);
console.log('El numero es:', output);
