const database = require("../database");

exports.getAllGenres = (req, res) => {
    const query = "SELECT * FROM GENEROS";
    
    database.query(query).then(
        (result)=>{
            res.status(200).send({result: result.rows})
        },
        (error)=>{
            res.status(404).send({error: error})
        }
    )
};

exports.getGenresbyId = (req, res) => {
    const query = "select * from generos where cod_genero = $1";
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