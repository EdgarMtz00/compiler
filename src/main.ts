import lexical_analysis from './lexical_analysis.ts';

const input1 = 'identificador';
console.log(lexical_analysis(input1));

const input2 = '3.42';
console.log(lexical_analysis(input2));

const input3 = '3.numeroinvalido';
try {
    lexical_analysis(input3)
} catch (e) {
    console.log(e)
}

const input4 = 'identificador.invalido';
try {
    lexical_analysis(input4)
} catch (e) {
    console.log(e)
}