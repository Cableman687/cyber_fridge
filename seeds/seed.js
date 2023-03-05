const sequelize = require('../config/connection');
const { User, Ingredient } = require('../models');
const userData = require('./userData.json');
const ingredientData = require('./ingredient-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Ingredient.bulkCreate(ingredientData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

