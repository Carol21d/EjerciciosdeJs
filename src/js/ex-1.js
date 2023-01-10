const text = " Hello World";
function imprimeHelloJs() {
  let ex1 = document.getElementById("ex-1");
  ex1.innerHTML = text;
  console.log(`<h1>${text}</h1>`);
}
imprimeHelloJs();
