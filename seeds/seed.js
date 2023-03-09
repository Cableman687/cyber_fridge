const sequelize = require('../config/connection');
const { User , Ingredient , Recipe, IngredientUser, RecipeIngredient } = require('../models');
const userData = require('./userData.json');
const ingredientData = require('./ingredient-seeds.json');
const recipeData = require('./recipe-seeds.json');
const ingredientUserData = require('./ingredient-user-seeds.json');
const recipeIngredientData = require('./recipe-ingredient-seeds.json');


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

  await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });

  await IngredientUser.bulkCreate(ingredientUserData, {
    individualHooks: true,
    returning: true,
  });

  await RecipeIngredient.bulkCreate(recipeIngredientData, {
    individualHooks: true,
    returning: true,
  });

  

  process.exit(0);
};

seedDatabase();

