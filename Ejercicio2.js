let valores = [true, 5, false, 'hola', 'adios', 2];
let str1 = valores[3].length;
let str2 = valores[4].length;
let mayor;

if( str1 > str2 ){
    mayor = valores[3];
}

if( str1 < str2) {
    mayor = valores[4];
}

if( str1 == str2) {
    mayor = 'ninguno.';
}

console.log('el elemento de texto mayor es:', mayor );
