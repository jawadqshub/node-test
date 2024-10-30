const chechAuth = (req, res, next) => {
    // Get the user from the jwt token
    try {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({ error: "Please authenticate using a valid token" })
        }
        next();
    } catch (error) {
        res.status(500).send({ error: "internal server error" })
    }

}


module.exports = chechAuth;