const allRoles = {
  guest: ['getUsers', 'manageUsers', 'manageBills', 'getBills', 'manageFeedbacks'],
  admin: [
    'getUsers',
    'manageUsers',
    'manageHotels',
    'manageRooms',
    'manageRestaurants',
    'manageTables',
    'manageSelfVehicles',
    'manageDetailVehicles',
    'manageBills',
    'manageFeedbacks',
  ],
  partner: [
    'getUsers',
    'manageUsers',
    'manageHotels',
    'manageRooms',
    'manageRestaurants',
    'manageTables',
    'manageSelfVehicles',
    'manageDetailVehicles',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
