const database = require("../database");

exports.getAuthorById = (req, res) => {
    const query = "SELECT * FROM AUTORES where cod_autor = $1"
    const values = [req.params.cod_autor]

    database.query(query, values).then(
        (result)=>{
            res.status(200).send({result: result.rows})
        },
        (error)=>{
            res.status(404).send({error: error})
        }
    )
};

exports.getAllAuthors = (req, res) => {
    const query = "SELECT * FROM AUTORES"
    database.query(query).then(
        (result)=>{
            res.status(200).send({result: result.rows})
        },
        (error)=>{
            res.status(404).send({error: error})
        }
    )
};

exports.createAuthor = (req, res) => {
    const query = `INSERT INTO autores (nome, pais, url_autor) VALUES ($1, $2, $3)`
    const values = [req.body.nome, req.body.pais, req.body.url_autor]

    database.query(query, values).then(
        (result)=>{
            res.status(200).send({result: result.rows})
        },
        (error)=>{
            res.status(404).send({error: error})
        }
    )
};
