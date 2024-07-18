const asyncHandler = require("express-async-handler");
const { findManyUsers, findUserByIdAndUpdate, findUserByIdAndDelete } = require("../services/user.service");
const { updateUserHandler } = require("./user.controller");

const getAllStaffHandler = asyncHandler(async (req, res) => {
    const staff = await findManyUsers({ isStaff: true});
    res.json(staff);
});

const createStaffUserHandler = asyncHandler(async (req, res) => {
    const { roleId, email, username, password } = req.body;
    if (!(roleId && email && username && password )) throw new Error("Bad request, please use all fields");
    const newStaffMember = await createNewUser({ roleId, email, username, password, isStaff: true});
    res.status(201).json(newStaffMember);
});

const updateStaffHandler = asyncHandler(async (req, res) => {
    const { roleId, email, username, password } = req.body;
    const updatedStaff = await findUserByIdAndUpdate(req.params.id, { roleId, email, username, password});
    res.status(202).json(updatedStaff);
});

const deleteStaffHandler = asyncHandler(async (req, res) => {
    const staff = await findUserByIdAndUpdate(req.params.id, { isStaff: false });
    staff.roleId = null;
    await staff.save();
    res.status(202).json(staff)
});

const getAllUsersHandler = asyncHandler(async (req, res) => {
    const users = await findManyUsers({});
    res.json(users);
});

const removeUserHandler = asyncHandler(async (req, res) => {
    const user = await findUserByIdAndDelete(req.params.id);
    res.status(202).json(user)
})

module.exports = { getAllStaffHandler, createStaffUserHandler, updateStaffHandler, deleteStaffHandler, removeUserHandler, getAllUsersHandler };