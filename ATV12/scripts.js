async function consultCNPJ() {
    const cnpj = document.getElementById('cnpjInput').value;
    const resultDiv = document.getElementById('cnpjResult');

    if (cnpj) {
        try {
            const response = await fetch(`/api/cnpj?cnpj=${cnpj}`);
            const data = await response.json();

            if (data.status === 'OK') {
                resultDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${data.nome}</p>
                    <p><strong>Atividade Principal:</strong> ${data.atividade_principal[0].text}</p>
                    <p><strong>UF:</strong> ${data.uf}</p>
                    <p><strong>Telefone:</strong> ${data.telefone}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p class="text-red-500">${data.message}</p>`;
            }
        } catch (error) {
            resultDiv.innerHTML = `<p class="text-red-500">Erro ao consultar o CNPJ</p>`;
        }
    } else {
        resultDiv.innerHTML = `<p class="text-red-500">Por favor, insira um CNPJ válido</p>`;
    }
}
