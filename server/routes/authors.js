const express = require('express');
const router = express.Router();

// select * from AUTORES
// select * from AUTORES where Cod_autor = {:Cod_autor};
// usages:
// - listar os autores na página de autores.
// - apresenta o autor selecionado em um modal.
router.get('api/v1/authors/:Cod_autor')

//
// depends on:
// - router.get('api/v1/books/authors/search/:Nome')

//
// usages:
// - cria um novo autor na tabela de autores.
router.post('api/v1/authors/create')

module.exports = router