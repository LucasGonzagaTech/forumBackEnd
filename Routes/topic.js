const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// Criar novo tópico
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const topic = new Topic({ title, content, author });
        await topic.save();
        res.status(201).send(topic);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Obter todos os tópicos
router.get('/', async (req, res) => {
    try {
        const topics = await Topic.find().populate('author');
        res.send(topics);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
