function verificarSaldo(saldo) {
    if (saldo > 0) {
        console.log("Saldo positivo");
    } else {
        console.log("Saldo negativo");
    }
}

function realizarSaque(saldoAtual, valorSaque) {
    if (valorSaque <= saldoAtual) {
        saldoAtual -= valorSaque;
        console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
    } else {
        console.log("Saldo insuficiente");
    }
}

function realizarDeposito(saldoAtual, valorDeposito) {
    saldoAtual += valorDeposito;
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
}

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
        saldoOrigem -= valorTransferencia;
        saldoDestino += valorTransferencia;
        console.log("Transferência realizada com sucesso");
    } else if (valorTransferencia > saldoOrigem) {
        console.log("Saldo insuficiente para transferência");
    } else {
        console.log("Valor excede o limite de transferência");
    }
}

function checarChequeEspecial(saldo) {
    if (saldo < 0) {
        console.log("Dentro do limite do cheque especial");
    } else {
        console.log("Fora do limite do cheque especial");
    }
}

function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo) {
        if (saldo > 0) {
            console.log("Cadastro ativo e saldo positivo");
        } else {
            console.log("Cadastro ativo mas precisa regularizar saldo");
        }
    } else {
        console.log("Por favor, atualize seu cadastro");
    }
}

function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
        console.log("Crédito aprovado");
    } else {
        console.log("Crédito negado");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verificarButton").addEventListener("click", function() {
        var saldo = parseFloat(document.getElementById("saldoInput").value);
        verificarSaldo(saldo);
    });

    document.getElementById("saqueButton").addEventListener("click", function() {
        var saldoAtual = parseFloat(document.getElementById("saldoAtual").value);
        var valorSaque = parseFloat(document.getElementById("valorSaque").value);
        realizarSaque(saldoAtual, valorSaque);
    });

    document.getElementById("depositoButton").addEventListener("click", function() {
        var saldoAtual = parseFloat(document.getElementById("saldoAtualDeposito").value);
        var valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        realizarDeposito(saldoAtual, valorDeposito);
    });

    document.getElementById("transferenciaButton").addEventListener("click", function() {
        var saldoOrigem = parseFloat(document.getElementById("saldoOrigem").value);
        var saldoDestino = parseFloat(document.getElementById("saldoDestino").value);
        var valorTransferencia = parseFloat(document.getElementById("valorTransferencia").value);
        var limiteTransferencia = parseFloat(document.getElementById("limiteTransferencia").value);
        realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia);
    });

    document.getElementById("chequeEspecialButton").addEventListener("click", function() {
        var saldo = parseFloat(document.getElementById("saldoChequeEspecial").value);
        checarChequeEspecial(saldo);
    });

    document.getElementById("atualizarCadastroButton").addEventListener("click", function() {
        var cadastroAtivo = document.getElementById("cadastroAtivo").checked;
        var saldo = parseFloat(document.getElementById("saldoCadastro").value);
        atualizarCadastro(cadastroAtivo, saldo);
    });

    document.getElementById("avaliarCreditoButton").addEventListener("click", function() {
        var saldo = parseFloat(document.getElementById("saldoCredito").value);
        var historicoCredito = document.getElementById("historicoCredito").checked;
        var rendaMensal = parseFloat(document.getElementById("rendaMensal").value);
        avaliarCredito(saldo, historicoCredito, rendaMensal);
    });
});
