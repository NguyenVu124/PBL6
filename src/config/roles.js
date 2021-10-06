const allRoles = {
  guest: ['getUsers', 'manageUsers'],
  admin: [
    'getUsers',
    'manageUsers',
    'createHotel',
    'createRoom',
    'deleteRoom',
    'updateHotel',
    'deleteHotel',
    'updateRoom',
    'createRestaurant',
    'updateRestaurant',
    'deleteRestaurant',
    'createTable',
    'updateTable',
    'deleteTable',
    'createSelfVehicle',
    'updateSelfVehicle',
    'deleteSelfVehicle',
    'createDetailVehicle',
    'updateDetailVehicle',
    'deleteDetailVehicle',
  ],
  partner: [
    'createHotel',
    'createRoom',
    'deleteRoom',
    'updateHotel',
    'deleteHotel',
    'updateRoom',
    'createRestaurant',
    'updateRestaurant',
    'deleteRestaurant',
    'createTable',
    'updateTable',
    'deleteTable',
    'createSelfVehicle',
    'updateSelfVehicle',
    'deleteSelfVehicle',
    'createDetailVehicle',
    'updateDetailVehicle',
    'deleteDetailVehicle',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
