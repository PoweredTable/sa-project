const database = require("../database");

exports.getBookById = (req, res) => {
    const query = "SELECT * FROM mangas where cod_manga = $1";
    const values = [req.params.cod_manga];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.getAllBooks = (req, res) => {
    const query = "SELECT * FROM mangas";

    database.query(query).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.getBookByName = (req, res) => {
    const query = "SELECT * FROM mangas WHERE LOWER(nome) LIKE LOWER('%' || $1 || '%')";
    const values = [req.params.nome];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};


exports.getBookByGenreId = (req, res) => {
    const query = "select * from MANGAS where Genero = $1";
    const values = [req.params.cod_genero];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.getBookByGenreName = (req, res) => {
    const query = `select M.Autor, M.Genero, M.nome,M.cod_manga, M.preco, M.Url_capa 
    from genero G inner join mangas M on G.cod_genero=M.Genero 
    where LOWER(nome) LIKE LOWER('%' || $1 || '%')`;
    const values = [req.params.nome];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.getBookByAuthorName = (req, res) => {
    const query = `select M.Autor, M.Genero, M.nome,M.cod_manga, M.preco, M.Url_capa 
    from autores A inner join mangas M on A.cod_autor=M.autor 
    where LOWER(nome) LIKE LOWER('%' || $1 || '%')`;
    const values = [req.params.nome];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.getBookByBannerId = (req, res) => {
    const query = "select * from MANGAS where Banner = ($1)";
    const values = [req.params.cod_banner];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.createBook = (req, res) => {
    const query = `INSERT INTO  mangas (nome, sinopse, preco_unit, quantidade, paginas, url_capa, banner, genero, autor) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    const values = [req.body.nome, req.body.sinopse, req.body.preco_unit, req.body.quantidade,
    req.body.paginas, req.body.url_capa, req.body.banner, req.body.genero, req.body.autor];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

exports.updateBookColumnById = (req, res) => {
    const query = `UPDATE mangas SET quantidade = $2 where cod_manga = $1`;
    const values = [ req.params.cod_manga, req.body.column_value, ];

    database.query(query, values).then(
    (result) => {
        res.status(200).send({ result: result.rows })
    },
    (error) => {
        res.status(404).send({ error: error })
    }
)
}
exports.updateBookById = (req, res) => {
    const query = `UPDATE mangas SET nome = $1, sinopse = $2, preco_unit = $3, quantidade = $4, paginas = $5, 
                   url_capa = $6, banner = $7, genero = $8, autor = $9 WHERE cod_manga = $10`;       
    const values = [req.body.nome, req.body.sinopse, req.body.preco_unit, req.body.quantidade,
                    req.body.paginas, req.body.url_capa, req.body.banner, req.body.genero, req.body.autor, req.body.cod_manga];

    database.query(query, values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
            console.log('sucesso')
        },
        (error) => {
            console.log('erro')
            res.status(404).send({ error: error })
        }
    )
};

exports.deleteBookById = (req, res) => {
    const query =`DELETE FROM mangas WHERE cod_manga = $1`;
    const values =[req.body.cod_manga];

    database.query(query,values).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )
};

