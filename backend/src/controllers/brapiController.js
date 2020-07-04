const connection = require('../database/connection');
const Crypto = require('crypto');
const axios = require('axios');

module.exports = {
    async location(req, res) {

        const {
            cep
        } = req.body;
        var address = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}` );
        return res.json(address.data);
    }
   
}