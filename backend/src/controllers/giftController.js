const connection = require('../database/connection');
const Crypto = require('crypto');
const axios = require('axios');
const atob = require('atob');
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
    }
}