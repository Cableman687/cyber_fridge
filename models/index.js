const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');
const RecipeIngredient = require('./RecipeIngredient');
const IngredientUser = require('./IngredientUser');

// RECIPES ASSOCIATIONS-------
Recipe.belongsToMany(Ingredient, {
 
  through: RecipeIngredient

});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

Recipe.hasMany(RecipeIngredient, {
  foreignKey: "recipe_id",
})

// INGREDIENT ASSOCIATIONS-------
Ingredient.belongsToMany(Recipe, {
  
  through: RecipeIngredient
});

// Ingredients belongToMany User (Through IngredientUser)
Ingredient.belongsToMany(User, {
  
  through: IngredientUser
});

// USER ASSOCIATIONS-------

User.belongsToMany(Ingredient, {
  
  through: IngredientUser
});


























//----old---

// Users have many ingredients
// User.hasMany(Ingredient, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// // Users have many recipes
// User.hasMany(Recipe, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Ingredient.belongsTo(User, {
//   foreignKey: 'user_id'
// });
  


module.exports = { User, Ingredient, Recipe, RecipeIngredient, IngredientUser};


 // as:'FridgeIngredient',
