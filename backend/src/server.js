const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // importa o arquivo de rotas
const cors = require('cors'); // importa lib que gerencia acesso remoto e evita erros de cors
const path = require('path');

const app = express();

// conecta no banco de dados
mongoose.connect('mongodb+srv://developer:developer@omnistack-3yob3.mongodb.net/sis_airbnb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // habilita o uso do json no express
app.use(routes); // habilita o uso do arquivo routes na aplic ação
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(3333);