const {sequelize, DataTypes, Model} = require('./db')

class Restaraunt extends Model {
	//add custom methods for advanced querying
}

Restaraunt.init({
	name: DataTypes.STRING,
	food: DataTypes.STRING,
	size: DataTypes.BOOLEAN
}, {
	sequelize,
	timestamps: false,
});


module.exports = { Restaraunt };