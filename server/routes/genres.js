const express = require('express');
const router = express.Router();

// select * from GENEROS
// usages:
// - listar os gêneros na subnavbar (modal) e na sidebar.
router.get('api/v1/genres')

module.exports = router