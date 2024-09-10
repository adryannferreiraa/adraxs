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
