const countVowels = (phrase) => {
  const vowels = "aáeéiíoóuú";
  let count = 0;
  for (const letter of phrase) {
    if (vowels.includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
};

const phraseFinal = prompt("enter your phrase");
const vowels = countVowels(phraseFinal);
document.write(`In "${phraseFinal}" we have found '${vowels} vowels'`);
