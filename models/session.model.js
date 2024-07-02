const { DataTypes } = require("sequelize");

const sessionModel = (db) => {
    return db.define("Session", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        }
    })
}

module.exports = { sessionModel }