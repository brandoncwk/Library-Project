const { User } = require("../models");

const createNewUser = (body) => {
    return User.create({ ...body });
}

const findManyUsers = (searchParam) => {
    return User.findAll({ where: { ...searchParam}});
}

const findUserById = async (id) => {
    const user = await User.findBookById
    if (!user) throw new Error("User with specified ID does not exist")
    return user;
}

const findOneUser = (searchParam) => {
    return User.findOne({ where: { ...searchParam}});
}

const findUserByIdAndUpdate = async (id, body) => {
    const user = await findUserById(id);
    for (const key of Object.keys(body)) {
        user[key] = body[key] ?? book[key]; // if body[key] is null or undefined, keep the original value
    }
    await user.save();
    return user;
}

const findUserByIdAndDelete = async (id) => {
    const user = await User.findUserById(id);
    await user.destroy();
    return user;
}

module.exports = {
    createNewUser,
    findUserById,
    findOneUser,
    findManyUsers,
    findUserByIdAndUpdate,
    findUserByIdAndDelete
}