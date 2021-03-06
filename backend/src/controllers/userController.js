const connection = require('../database/connection.js');
const knex = require('knex');

module.exports = {

    async create(req, res) {

        const {telefone} = req.body;
        
        const findUser = await 
            connection('users')
            .where('telefone', telefone)
            .select('*')
            .first();
            
        if(findUser) return res.status(400).send({message: "User already exists"});


        try {
            await connection('users').insert({
                telefone
            });

            return res.status(200).send({message: "User created!"});
            
        } catch(err) {
            return res.status(401).send({message: "Erro ao criar o user"});
        }

    },

    async list(req, res) {
        
        const {
            page = 1
        } = req.query;

        console.log(page);

        const listUsers = await connection('users')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        return res.json(listUsers);
    },
    async balance(req, res) {
        
        const {
            telefone
        } = req.body;

        const value = await connection('users')
            .where('telefone', telefone)
            .select('saldo')
            .first();

        return res.json(value);
    },

    async change(req, res) {
        
        const {
            telefone,
            value
        } = req.body;

        const user = await connection('users')
            .where('telefone', telefone)
            .select('*')
            .increment('saldo', value);
            
        
        return res.status(200).send('success!');
    }
}
