const express = require('express');
const multer = require('multer');

// importa configurações
const uploadConfig = require('./config/upload');

// importa controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query => acessa os query params - para filtros
// req.params => acessar route params - para edição e delete
// req.body => acessar corpo da requisição - para criação e edição
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);



// exporta as rotas para aplicação
module.exports = routes;
