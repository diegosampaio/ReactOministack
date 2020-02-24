// importa o models
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body; // recupera dados de email do objeto e armazena na variavel email

        // verifica se usuario ja esta registrado
        let user = await User.findOne({ email });

        // caso não exista cria
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }

}