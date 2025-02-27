const { Session, User, Role } = require("../models")

const CreateNewSession = async (body) => {
    return Session.create({ ...body });
}

const findSessionById = async (id) => {
    return Session.findByPk(id, { include: [{model: User, include: [Role] }] });
}

const findSessionByIdAndDelete = async (id) => {
    const session = await findSessionById(id);
    session.destroy();
    return session;
}

module.exports = { CreateNewSession, findSessionById, findSessionByIdAndDelete};