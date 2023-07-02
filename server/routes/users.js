const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

// usages:
// - autentica o usuário administrador na tela de gerenciamento de produtos.
router.post('/admin/auth', controller.checkAdminAuth);

module.exports = router