const allRoles = {
  guest: [],
  admin: ['getUsers', 'manageUsers'],
  partner: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
