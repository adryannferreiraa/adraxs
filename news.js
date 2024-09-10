const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema);
const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Rota para obter todas as notícias
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para criar uma nova notícia
router.post('/', async (req, res) => {
    const news = new News({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
