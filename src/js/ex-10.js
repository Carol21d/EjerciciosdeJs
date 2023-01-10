let a = (e = i = o = i = u = 0);

vowels = showVowels();

function showVowels() {
  let phrase = prompt(" enter your phrase");
  let phraseV = phrase.toLocaleLowerCase();
  return phraseV;
}

for (let index = 0; index < vowels.length; index++) {
  switch (vowels[index]) {
    case "a":
      a++;
      break;
    case "e":
      e++;
      break;
    case "i":
      i++;
      break;
    case "o":
      o++;
      break;
    case "u":
      u++;
      break;
 

    default:
      break;
  }
}

vowelsFinals = a+e+i+o+u;

document.write("There is " +  a + " vowels 'a'<br>");
document.write("There is " +  e + " vowels 'e'<br>");
document.write("There is " +  i + " vowels 'i'<br>");
document.write("There is " +  o + " vowels 'o'<br>");
document.write("There is " +  u + " vowels 'u'<br>");
document.write(`your phrase is "${vowels}"`);
