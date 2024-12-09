const axios = require('axios');

const fetchEnderecoByCep = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar no via cep os dados');
    }
}

module.exports = { fetchEnderecoByCep }