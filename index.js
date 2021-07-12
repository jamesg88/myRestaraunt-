  
const {sequelize, DataTypes, Model} = require('./db');

const {Restaraunt} = require('./restaraunt');
const {Menu} = require('./menu');
const {menuItem} = require('./menu-items');


// module.exports = { Restaraunt, Menu, menuItem };


//Create our Association!
menuItem.belongsTo(Restaraunt) //adds a foreign key on the musician table, for the band they belong to
Menu.hasMany(menuItem) //gives us Sequelize magic methods

module.exports = { Restaraunt, Menu, menuItem }; // make sure we export our models with the associations added!
