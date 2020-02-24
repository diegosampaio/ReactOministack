const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    // lista spots por tecnologia
    async index(req, res) {

        const { tech } = req.query;
        
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },


    // cadastra novo spot
    async store(req, res) {
        
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        // verifica se o usuario existe
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não existe!'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    }
}