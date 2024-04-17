let alunos = [];

function addAluno(id, nome, nota) {
    alunos.push({ id: id, nome: nome, nota: nota });
}

function buscarAlunoPorId(id) {
    return alunos.find(aluno => aluno.id === id);
}

function calcularMediaNotas() {
    if (alunos.length === 0) {
        return 0;
    }

    let somaNotas = alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
    return somaNotas / alunos.length;
}

// Exemplo de uso das funções
addAluno(1, "gustavo", 8);
addAluno(2, "roberto", 7);
addAluno(3, "julia", 9);

console.log(alunos);

let alunoEncontrado = buscarAlunoPorId(2);
console.log(alunoEncontrado); // Mostra o aluno encontrado

let mediaNotas = calcularMediaNotas();
console.log("media dos alunos:", mediaNotas);