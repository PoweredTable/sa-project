const express = require('express');
const router = express.Router();
const controller = require('../controllers/banners');

// select * from BANNERS
// usages:
// - lista todos os banners disponíveis.
router.get('/all', controller.getAllBanners);

// INSERT INTO banners (url_banner) VALUES (${LISTA DE DADOS})
// usages: 
// - cria um novo banner no banco de dados.
router.post('/create', controller.createBanner);

module.exports = router