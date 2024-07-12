const { createNewRole } = require("../services/role.service");
const { findUserById } = require("../services/user.service");

const setAdmin = async () => {
    const admin = await createNewRole({
        name: "admin",
        canLendBooks: true,
        canManageUsers: true,
        canManageStaff: true,
        canManageBooks: true,
    });
    const user = await findUserById("0eeaa8b8-6376-42bc-9531-b46dbbf8c695");
    user.isStaff = true;
    user.roleId = admin.id;
    await user.save();

    console.log(user);
}

setAdmin();

//Troubleshoot why script keeps breaking