
exports.checkAdminAuth = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    if (login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASSWORD) {
        res.send(200).send(true);
    }    
    else {
        res.status(401).send(false)
    }
    

};