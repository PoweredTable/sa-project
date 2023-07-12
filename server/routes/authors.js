const express = require('express');
const router = express.Router();
const controller = require('../controllers/authors');


// select * from AUTORES
// usages:
// - listar os autores na página de autores.
router.get('/all', controller.getAllAuthors);


// select * from AUTORES where cod_autor = {:cod_autor};
// usages:
// - apresenta o autor selecionado em um modal.
router.get('/:cod_autor', controller.getAuthorById);


// INSERT INTO autores (nome, pais, url_autor) VALUES (${lista de dados})
// usages:
// - cria um novo autor na tabela de autores.
router.post('/create', controller.createAuthor);

module.exports = router
