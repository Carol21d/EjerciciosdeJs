// Conectar
// Realizar un programa que pida dos numeros 
//Que escriba la suma de \numero uno\ con \numero dos\ mostradndo el resultado
//Saber que son numeros
//Imprimir el resultado en pantalla





function pedirNumeros() {
    let number1 = prompt("El valor del numero 1",0);
    let number2 = prompt("El valor del numero 2",0);
    let resultadoSuma = parseInt(number1) + parseInt(number2);
    document.write("El resultado de la suma de "+number1+" + "+number2+" es => "+resultadoSuma);
    
}
pedirNumeros();