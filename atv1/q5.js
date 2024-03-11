const valorSaque = parseInt(prompt("digite o valor que deseja sacar:"));

if (valorSaque % 10 === 0) {
    alert("saque realizado com sucesso");
} else {
    alert("valor invalido. digite um valor múltiplo de 10");
}