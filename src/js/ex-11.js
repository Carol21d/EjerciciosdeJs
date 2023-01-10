let number = prompt("enter number");

if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
    document.write(number+" Its divisible by 2,3,5 and 7  ");
    
}else{
    document.write(number+" It's not divisible by 2,3,5 and 7 ");
}
