//pedir los numeros
//declarar mis variables
//que haga una comparacion entre el primer numero y el segundo 
//


let number1 = parseInt(prompt("Enter number 1: ",0));
let number2 =parseInt(prompt("Enter number 2: ",0));
let number3 = parseInt(prompt("Enter number 3: ",0));
let comp;
let result;



if (number1>number2 &&number1>number3) {
    document.write("the number 1 is bigger : "+number1);
    
}
 if(number2>number1 &&number2>number3){
    document.write("the number 2 is bigger : "+number2);
 }

 if (number3>number1 &&number3>number2) {
    document.write("the number 3 is bigger :  "+number3);
    
 }















// if (number1 > number2) {
//     comp = number1;
//     document.write("el mayor es el numero 1 "+number1);
    
// }else{
//     comp = number2;
//     document.write("el mayor es el numero 2 "+number2);
// }

// if (comp >number3) {
//     result = comp;
    
// }else{
//     result = number3;
//     // document.write("el mayor es el numero 3 " +result);
// }


// document.write("el mayor es " +result);
