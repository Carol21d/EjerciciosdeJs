const maxComunD = (number1, number2) => {
    
    let comp; 
    while (number2 !== 0) {
        comp = number2;
        number2 = number1 % number2;
        number1 = comp;
    }
    return  number1;
};

const recursivo = (number1, number2) => {
    if (number2 === 0) return number1;
    return recursivo(number2, number1 % number2);
};

const number1= prompt("enter number 1") 
const number2 = prompt("enter number 2")
const result = maxComunD(number1, number2);
const calculo = maxComunD(number1, number2);
document.write(`maximo comun divisor  ${number1} and ${number2} is ${result}`);
document.write(`recusividad of ${number1} and ${number2} is ${calculo}`);