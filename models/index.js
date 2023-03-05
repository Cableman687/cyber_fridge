const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');


User.hasMany(Ingredient, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
Ingredient.belongsTo(User, {
    foreignKey: 'user_id'
  });

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Ingredient, Recipe};



