const Toy = require('../models/toy')

exports.getAllToys = async (req, res) => {
    try {
        const toys = await Toy.find();
        res.json(toys)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.createToy = async (req, res) => {
    try {
        const newToy = new Toy({ name: req.body.name })
        await newToy.save();
        res.json(newToy)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}