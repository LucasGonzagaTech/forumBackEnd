const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registrar usuário
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Fazer login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(400).send('Credenciais inválidas');
        }
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
