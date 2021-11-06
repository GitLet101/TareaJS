function whichCase ( string ){
    let result;

    if( string == string.toUpperCase() ){
        result = 'Mayúsculas';
        return result;
    }

    if( string == string.toLowerCase() ){
        result = 'Minúsculas';
        return result;
    }

    return result = 'Ambos';
}

let userInput;
let output;

userInput = prompt('Introduzca un texto');

output = whichCase(userInput);
console.log('El texto esta compuesta por:', output);
