

let phrase = prompt('Enter your phrase : ');
let character = "a";
let count = 0;

for (let index = 0; index < phrase.length; index++) {
    if (phrase.charAt(index) === character) {
        count++;
        
    }
    
}

document.write(`We have found ${count} letters '${character}' in your text`);





