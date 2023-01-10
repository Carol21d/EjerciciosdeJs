function counterVowel() {
    let phrase = prompt('enter your phrase : ');
    let allVowels = 'aeiouAEIOU';
    let count = 0;
    for (let index = 0; index < phrase.length; index++) {
       if (allVowels.indexOf(phrase[index]) !== -1) {
        document.write("the vowels in your phrase are  " +phrase[index]+"<br/>");
        count+=1;
        
       }
        
    }
    return count;
}
 document.write(counterVowel(""));






