const express = require('express');
const router = express.Router();

// select * from BANNERS
// usages:
// - lista todos os banners disponíveis.
router.get('api/v1/banners')

module.exports = router