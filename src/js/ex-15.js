const validate = prompt("enter your number to find out if it is divisible by itself and by another");
let comp;
let primo = true;

for (comp=2; comp < validate / 2; comp++) {
    if (validate % comp == 0 || validate % comp == 1 || validate % comp == 4) {
    primo = false;
    }
    }
    if (primo) {
    document.write("Its primo");
    } else {
    document.write("Its not primo");
    }




