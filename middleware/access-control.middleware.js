const expressAsyncHandler = require("express-async-handler");

const isAuthenticated = expressAsyncHandler(async (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        throw new Error("User is not logged in");
    }
});

module.exports = { isAuthenticated };