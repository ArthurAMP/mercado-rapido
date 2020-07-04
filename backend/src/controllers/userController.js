const connection = require('../database/connection.js');
const { list } = require('./giftController.js');


module.exports = {

    async create(req, res) {

        const {telefone, cpf} = req.body;
        
        try {
            await connection('users').insert({
                telefone,
                cpf
            });

            return res.status(200).send({message: "User created!"});
        } catch(err) {
            return res.status(401).send({message: "wtf deu errado"});
        }

    },

    async list(req, res) {
        
        const {
            page = 1
        } = req.query;

        console.log(page);

        const listCards = await connection('users')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        return res.json(listCards);
    }
}
