// Authentication Middleware
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);
    
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

exports.checkRole = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.sendStatus(403);
        }
        next();
    };
};
