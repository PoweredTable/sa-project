const express = require('express');
const router = express.Router();

// usages:
// - autentica o usuário administrador na tela de gerenciamento de produtos.
router.post('api/v1/users/admin/auth')

module.exports = router