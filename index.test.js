const {sequelize, DataTypes, Model} = require('./db')

const {Restaraunt, menuItem } = require("./index")

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Restaraunt Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a restaraunt', async() => {
		const testRestaraunt = await Restaraunt.create({name : 'Quiznos'})
		expect(testRestaraunt.name).toBe('Quiznos')
	})

	test('can create a restaraunt', async() => {
		const testRestaraunt = await Restaraunt.create({food : 'Subs'})
		expect(testRestaraunt.food).toBe('Subs')
	})
	
	test('can take a large group', async() => {
		const testRestaraunt = await Restaraunt.create({size : true})
		expect(testRestaraunt.size).toEqual(true)
	})
	
	test('can take a large group', async() => {
		const testRestaraunt = await Restaraunt.create({size : true})
		expect(testRestaraunt.size).toEqual(true)
	})
	test('can order items', async() => {
		const testMenuItems = await menuItem.create({main : 'Chicken'})
		expect(testMenuItems.main).toBe('Chicken')
	})
	test('can order items', async() => {
		const testMenuItems = await menuItem.create({drinks : true})
		expect(testMenuItems.drinks).toEqual(true)
	})

	// test('can play an instrument', async () => {
	// 	const testMusician = await Musician.create({name: 'Jimi Hendrix', instrument : "Guitar"});
	// 	expect(testRestaraunt.name).toBe('Guitar');
	// })

})