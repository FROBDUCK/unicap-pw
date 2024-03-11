const lado1 = parseFloat(prompt("informe o comprimento do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("informe o comprimento do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("informe o comprimento do terceiro lado do triângulo:"));

if (validarTriangulo(lado1, lado2, lado3)) {
    const classificacao = classificarTriangulo(lado1, lado2, lado3);

    alert(`o triângulo é classificado como: ${classificacao}`);
} else {
    alert("esses comprimentos não formam um triângulo valido.");
}

function validarTriangulo(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function classificarTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        return "triângulo Isósceles";
    } else {
        return "triângulo Escaleno";
    }
}