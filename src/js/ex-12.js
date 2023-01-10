let number = prompt("Enter number");


if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0){


    if (number % 2 === 0) {
        document.write(number+" It's  divisible by 2<br>");
        
    }

    if (number % 3 === 0) {
        document.write(number+" It's  divisible by 3<br>");
    }
    
    if(number % 5 === 0){
        document.write(number+" It's  divisible by 5<br>");
    }

    if (number % 7 === 0) {
        document.write(number+" It's  divisible by 7<br>");
        
    }



}



