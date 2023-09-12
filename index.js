function exercicio1() {
  var nota = parseInt(prompt("digite um numero"));
  while (nota < 0 || nota > 10) {
    nota = parseInt(prompt("digite novamente a nota"));
  }
  document.getElementById("root").style.display = "block"
  document.getElementById("root").innerHTML = `<p> sua mae é: ${nota}</p>`
}

(function exercicio2() {
  var i = 10;
  while (i < 0) {
    i = i - 1;
  }
  alert("feliz ano novo");
}
