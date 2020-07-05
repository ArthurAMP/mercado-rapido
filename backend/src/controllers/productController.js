const connection = require('../database/connection.js');
const axios = require('axios');


module.exports = {

    async search(req, res) {

        const { 
            query = "",
            offset = 0
     } = req.body;
        
        const productsList = await axios
            .get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=5&offset=${offset}`);

        const data = productsList.data.results;

        return res.send(data);
    }

}