const connection = require('../database/connection');
const Crypto = require('crypto');
const { change } = require('./userController')

module.exports = {

    async list(req, res) {

        const {
            page = 1
        } = req.query;

        const listCards = await connection('cards')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        return res.json(listCards);
    },
    async create(req, res) {
        const {
            cpf,
            value,
        } = req.body;

        function randomString(size) {  
            return Crypto
              .randomBytes(size)
              .toString('hex')
              .slice(0, size)
        }
        var hash = randomString(16);
        
        await connection('cards').insert({
            cpf,
            value,
            hash,
        });

        
        return res.status(201).send("Card created.");
    },
    async delete(req, res) {
        const {
            hash,
            cpf
        } = req.body;
        
        const getCard = await connection('cards')
            .where("hash", hash)
            .select('value')
            .first();

        change({ data: {"cpf": cpf, "value": getCard.value} });

        const delCard = await connection('cards')
            .where("hash", hash)
            .del();

        return res.status(201).send("Card used.");
    }
}