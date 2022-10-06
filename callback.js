function imprimir ( c ) {
    console .log(c)
}
function sumar(a , b ,callback){
    let suma = a + b
    imprimir(suma)
}

let resultado=0;
//ecutar :llamar a sumar
sumar(7, 8 , imprimir(resultado))