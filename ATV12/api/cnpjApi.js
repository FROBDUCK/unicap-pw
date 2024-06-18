const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { cnpj } = req.query;

    if (!cnpj) {
        return res.status(400).json({ status: 'ERROR', message: 'CNPJ é obrigatório' });
    }

    try {
        const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ status: 'ERROR', message: 'Erro ao consultar a API de CNPJ' });
    }
};
