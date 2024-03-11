var peso = parseFloat(prompt("informe o seu peso em quilogramas:"));
var altura = parseFloat(prompt("informe a sua altura:"));
var imc = peso / (altura * altura);
var categoria;

if (imc < 18.5) {
    categoria = "abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    categoria = "excesso de peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    categoria = "obesidade grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    categoria = "obesidade grau II";
} else {
    categoria = "obesidade grau III";
}
console.log("seu IMC é: " + imc.toFixed(2));
console.log("categoria do IMC: " + categoria);