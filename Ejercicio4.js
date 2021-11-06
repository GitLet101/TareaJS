function factorial( num ) {
    let result = num;

    for (let i = 1; num > i; i++){
        result *= i;
    }

    return result;
}

let userInput;
let result;

userInput = prompt('Introduzca un numero');

output = factorial(userInput);
console.log(output);
