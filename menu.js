const {sequelize, DataTypes, Model} = require('./db')

class Menu extends Model {

}

Menu.init({
    name: DataTypes.STRING
}, {
	sequelize,
	// timestamps: false,
});


module.exports = { Menu };


