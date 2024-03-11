const dataNascimento = prompt("Informe sua data de nascimento no formato AAAA-MM-DD:");

const dataNascimentoObj = new Date(dataNascimento);

const anoAtual = new Date().getFullYear();

const idade = anoAtual - dataNascimentoObj.getFullYear();

if (idade >= 18) {
    alert(`você tem ${idade} anos. você é maior de idade.`);
} else {
    alert(`você tem ${idade} anos. você é menor de idade.`);
}