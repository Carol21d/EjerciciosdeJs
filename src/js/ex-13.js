let numberEnt = prompt (" Enter your number");

let numbers;

for (numbers = 2; numbers < numberEnt/ 2; numbers++) {
    if (numberEnt % numbers ===0) {
        document.write(numberEnt+" divisible by "+numbers+"<br>");
        
    }
    
    
}