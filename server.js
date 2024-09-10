const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/news', newsRoutes);

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/fala-povo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
