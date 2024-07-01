const { Router } = require("express");
const { signupHandler } = require("../controllers/user.controller");
const passport = require("passport");

const router = Router();

router.route("/").post(signupHandler);
router.route("/login").post(passport.authenticate("local"), (req, res) => {
    res.json("logged in");
});

module.exports = router;