let alunos = {};

// Função para adicionar um novo aluno
function addAluno(id, nome, nota) {
    alunos[id] = { nome: nome, nota: nota };
}

function buscarAlunoPorId(id) {
    return alunos[id];
}

function calcularMediaNotas() {
    let totalNotas = 0;
    let quantidadeAlunos = 0;

    for (let id in alunos) {
        if (alunos.hasOwnProperty(id)) {
            totalNotas += alunos[id].nota;
            quantidadeAlunos++;
        }
    }

    if (quantidadeAlunos === 0) {
        return 0;
    }

    return totalNotas / quantidadeAlunos;
}

addAluno(1, "gustavo", 8);
addAluno(2, "roberto", 7);
addAluno(3, "julia", 9);

console.log(alunos);

let alunoEncontrado = buscarAlunoPorId(2);
console.log(alunoEncontrado);

let mediaNotas = calcularMediaNotas();
console.log("Média das notas dos alunos:", mediaNotas);