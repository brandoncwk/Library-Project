const asyncHandler = require("express-async-handler");
const { createNewUser } = require("../services/user.service");

const signupHandler = asyncHandler(async(req, res) => {
    const { username, password, email } = req.body;
    if (!(username && password && email)) throw new Error("Bad request, username, password and email are required");
    const user = await createNewUser({ username, password, email });
    res.status(201).json(user);
})

module.exports = { signupHandler };