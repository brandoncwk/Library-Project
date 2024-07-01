const Passport = require("passport");
const Strategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { findOneUser, findUserById } = require("../services/user.service");

const initPassport = (passport) => {
    const authenticate = async (email, password, cb) => {
        const user = await findOneUser({ email }).catch((err) => cb(err));
        if (!user) cb(Error("User not found"));
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) cb(Error("Bad Credentials"));
        return cb(null, user);
    };

    passport.use(new Strategy({ usernameField: "email"}, authenticate));

    passport.serializeUser((user, cb) => {
        return cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        const user = findUserById(id);
        return (null, user);
    });
};

module.exports = { initPassport };
