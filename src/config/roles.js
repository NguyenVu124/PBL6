const allRoles = {
  guest: ['getUsers', 'manageUsers'],
  admin: ['getUsers', 'manageUsers', 'createHotel', 'createRoom', 'deleteRoom', 'updateHotel', 'deleteHotel', 'updateRoom'],
  partner: ['createHotel', 'createRoom', 'deleteRoom', 'updateHotel', 'deleteHotel', 'updateRoom'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
