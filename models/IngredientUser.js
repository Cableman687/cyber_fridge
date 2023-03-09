const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class IngredientUser extends Model {}

IngredientUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ingredient_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'ingredient',
                key: 'id',
            }
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
    
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredient_user',
      }
);

module.exports = IngredientUser;