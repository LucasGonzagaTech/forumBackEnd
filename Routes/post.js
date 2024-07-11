const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Rota para listar todos os posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Criar novo post
router.post('/', async (req, res) => {
    const { content, author, topic } = req.body;
    try {
        const post = new Post({ content, author, topic });
        await post.save();
        res.status(201).send(post);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Obter posts de um tópico
router.get('/topic/:topicId', async (req, res) => {
    const { topicId } = req.params;
    try {
        const posts = await Post.find({ topic: topicId }).populate('author');
        res.send(posts);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
