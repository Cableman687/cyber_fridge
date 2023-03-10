const router = require('express').Router();
const { Recipe , Ingredient , RecipeIngredient} = require('../../models');

//update several ingredient based on recipe id
router.put('/:id', async(req, res) => {
    try {
      const ingredientData = await Ingredient.update({
        quantity: req.body.newElement,
      },
      {
        where: {
          name: req.body.nameElement,
        },
      });
      res.status(200).json(ingredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
