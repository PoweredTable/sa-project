const express = require('express');
const router = express.Router();

// select * from BANNERS
// usages:
// - lista todos os banners disponíveis.
router.get('api/v1/banners')

// INSERT INTO banners (url_banner)VALUES (${LISTA DE DADOS})
// usages: 
// - cria um novo banner no banco de dados.
router.post('api/v1/banners/create')

module.exports = router