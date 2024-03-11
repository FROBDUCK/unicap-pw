const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpite;

do {
    palpite = parseInt(prompt("adivinhe o número entre 1 e 100:"));

    if (palpite > numeroSecreto) {
        alert("tente novamente, O número secreto é menor.");
    } else if (palpite < numeroSecreto) {
        alert("Tente novamente, O número secreto é maior.");
    } else {
        alert(`Você adivinhou o número secreto ${numeroSecreto}`);
    }
} while (palpite !== numeroSecreto);