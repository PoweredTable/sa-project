const express = require('express');
const router = express.Router();
const controller = require('../controllers/books');

// select * from MANGAS;
// usages:
// - lista todos os livros ao clicar em Livros na subnavbar e ao entrar na tela de gerenciamento de produtos.
router.get('/all', controller.getAllBooks);


// select * from MANGAS where cod_manga = ${:cod_manga};
// usages:
// - apresenta o livro selecionado.
router.get('/:cod_manga', controller.getBookById);


// select * from MANGAS where cod_manga = ${:cod_manga};
// usages:
// - apresenta o livro selecionado.
router.get('/:cod_manga', controller.getBookById);
// select * from MANGAS where Nome like lower(${:nome});
// usages:
// - na searchbar, lista os livros que contenham caracteres do parâmetro `:nome` na coluna `nome` de MANGAS. 
router.get('/search/:nome', controller.getBookByName);

// select * from MANGAS where Genero = ${:cod_genero};
// usages:
// - gêneros listados possuirão o `cod_genero` na subnavbar e na sidebar, permitindo listar livros por gênero. 
// depends on:
// - router.get('api/v1/genres/all')
router.get('/genres/:cod_genero', controller.getBookByGenreId);

// select * from MANGAS M inner join GENERO G on G.Nome like lower(${:nome});
// usages:
// - na searchbar, lista os livros que contenham caracteres do parametro `:nome` na coluna `nome` de GENEROS.  
router.get('/genres/search/:nome', controller.getBookByGenreName)

// select A.Cod_autor, A.Nome, A.Url, M.Autor, M.Genero, M.nome,M.cod_manga, M.preco, M.Url_capa 
//          from Mangas M inner join AUTORES A on A.nome like lower(${nome_autor}) AND M.Autor==A.Cod_autor;
// usages:
// - na searchbar, lista os livros que contenham caracteres do parametro `:nome` na coluna `nome` de AUTORES.  
router.get('/authors/search/:nome', controller.getBookByAuthorName);

// select M.Autor, M.Genero, M.nome,M.cod_manga, M.preco, M.Url_capa,M.url_banner from MANGAS M WHERE M.Url_banner = {:cod_banner};
// usages:
// - lista os mangas de acordo com o banner clicado na tela inicial.
// depends on:
// - router.get('api/v1/banners/all')
router.get('/banners/:cod_banner', controller.getBookByBannerId);

//INSERT INTO Mangas (nome, sinopse, preco_unit, quantidade, paginas, url_capa, url_banner,genero,autor)
//VALUES (${nome:string}, ${sinopse:string}, ${preco_unit:number}, ${quantidade:number}, ${paginas:number},
//${url_capa:string}, ${url_banner:number(cod_banner)}, ${genero:number(cod_genero)}, ${autor:number(cod_autor)})
// usages:
// - cadastra um novo livro.
router.post('/create', controller.createBook);

// Update Mangas Set nome=${nome}, sinopse=${sinopse}, preco_unit={preco_unit}, quantidade=${}, paginas, url_capa, url_banner,genero,autor
//Where cod_manga = ${:cod_manga}
// usages:
// - atualiza as informações de um livro.
router.put('/update/:cod_manga/:column', controller.updateBookColumnById)
// router.put('/update/:cod_manga', controller.updateBookById);

//DELETE FROM mangas WHERE cod_manga = ${:cod_manga}
// usages:
// - apaga completamente um livro do banco de dados.
router.delete('/delete/:cod_manga', controller.deleteBookById);



module.exports = router
