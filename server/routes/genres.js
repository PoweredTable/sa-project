const express = require('express');
const router = express.Router();
const controller = require('../controllers/genres');

// select * from GENEROS
// usages:
// - listar os gêneros na subnavbar (modal) e na sidebar.
router.get('/all', controller.getAllGenres);

module.exports = router