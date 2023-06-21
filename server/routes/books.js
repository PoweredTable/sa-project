const express = require('express');
const router = express.Router();

// select * from MANGAS;
// select * from MANGAS where Cod_manga = {:Cod_manga};
// usages:
// - lista todos os livros ao clicar em Livros na subnavbar e ao entrar na tela de gerenciamento de produtos.
// - apresenta o livro selecionado.
router.get('api/v1/books/:Cod_manga')

// select * from MANGAS where Nome like lower({:Nome});
// usages:
// - na searchbar, lista os livros que contenham caracteres do parâmetro `:Nome` na coluna `Nome` de MANGAS. 
router.get('api/v1/books/search/:Nome')

// select * from MANGAS M inner join GENERO G on M.Genero = {:Cod_genero};
// usages:
// - gêneros listados possuirão o `Cod_genero` na subnavbar e na sidebar, permitindo listar livros por gênero. 
//
// depends on:
// - router.get('api/v1/genres')
router.get('api/v1/books/genres/:Cod_genero')

// select * from MANGAS M inner join GENERO G on G.Nome like lower({:Nome});
// usages:
// - na searchbar, lista os livros que contenham caracteres do parametro `:Nome` na coluna `Nome` de GENEROS.  
router.get('api/v1/books/genres/search/:Nome')

// select A.Cod_autor, A.Nome, A.Url, M.Autor, M.Genero, M.nome,M.cod_manga, M.preco, M.Url_capa 
//          from Mangas M inner join AUTORES A on A.nome like lower({:Nome}) AND M.Autor==A.Cod_autor;
// usages:
// - na searchbar, lista os livros que contenham caracteres do parametro `:Nome` na coluna `Nome` de AUTORES.  
router.get('api/v1/books/authors/search/:Nome')

// select * from MANGAS M inner join BANNERS B on M.Banner = {:Cod_banner};
// usages:
// - lista os mangas de acordo com o banner clicado na tela inicial.
// depends on:
// - router.get('api/v1/banners')
router.get('api/v1/books/banners/:Cod_banner')

//
// usages:
// - cadastra um novo livro.
router.post('api/v1/books/create')

//
// usages:
// - atualiza as informações de um livro.
router.put('api/v1/books/update/:Cod_manga')

//
// usages:
// - apaga completamente um livro do banco de dados.
router.delete('api/v1/books/delete/:Cod_manga')


module.exports = router