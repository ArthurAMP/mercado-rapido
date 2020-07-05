const connection = require('../database/connection.js');
const axios = require('axios');


module.exports = {

    async search(req, res) {

        const { query } = req.body;
        
        const productsList = await axios
            .get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=5`)

        const data = productsList.data.results;

        console.log(data.length);

        return res.send(data);
    }

}