const { DataTypes } = require("sequelize");

const roleModel = (db) => {
    return db.define("Role", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        canLendBooks: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        canManageBooks: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        canManageStaff: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        canManageUsers: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    })
}

module.exports = { roleModel }