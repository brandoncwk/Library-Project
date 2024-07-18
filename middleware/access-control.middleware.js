const expressAsyncHandler = require("express-async-handler");

// const isAuthenticated = expressAsyncHandler(async (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     } else {
//         throw new Error("User is not logged in");
//     }
// });

const isAuthenticated = (req, res, next) => {
    if (req.user) return next ();
    res.status(401);
    throw new Error("User is not logged in");
}

const isStaff = (req, res, next) => {
    if (req.user.isStaff) return next();
    res.status(403);
    throw new Error("Forbidden resource");
}

const hasPermission = (hasPermission) => {
    return (req, res, next) => {
        if (req.user.Role[hasPermission]) return next();
        res.status(403);
        throw new Error("Forbidden resource", isStaff, )
    }    
}

module.exports = { isAuthenticated, isStaff, hasPermission };