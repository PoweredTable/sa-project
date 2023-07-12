const database = require("../database");

exports.getAllBanners = (req, res) => {
    const query = "SELECT * FROM banners"
    
    database.query(query).then(
        (result) => {
            res.status(200).send({ result: result.rows })
        },
        (error) => {
            res.status(404).send({ error: error })
        }
    )

};

exports.createBanner = (req, res) => {
    const query = `INSERT INTO  banners (url_banner) VALUES ($1)`;
    const values = [req.body.url_banner];

    database.query(query, values).then(
        (result)=>{
            res.status(200).send({result: result.rows})
        },
        (error)=>{
            res.status(404).send({error: error})
        }
    )
    
};

exports.deleteBannerById = (req, res) => {
    const query =`DELETE FROM banners WHERE cod_banner = $1`;
    const values = [req.params.cod_banner];

    database.query(query, values).then(
        (result)=>{
            res.status(200).send({result: result.rows})
        },
        (error)=>{
            res.status(404).send({error: error})
        }
    )
};