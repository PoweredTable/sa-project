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