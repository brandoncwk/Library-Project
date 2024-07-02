const { Router } = require("express");
const { signupHandler, getCurrentUserHandler, logoutUserHandler, updateUserHandler } = require("../controllers/user.controller");
const passport = require("passport");
const { isAuthenticated } = require("../middleware/access-control.middleware");

const router = Router();

router.route("/").post(signupHandler).get(isAuthenticated, getCurrentUserHandler).patch(isAuthenticated, updateUserHandler);
router
    .route("/login")
    .post(passport.authenticate("local"), getCurrentUserHandler);
router.route("/logout").post(logoutUserHandler);

module.exports = router;