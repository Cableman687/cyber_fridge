const router = require('express').Router();
const { RecipeIngredient, IngredientUser } = require('../../models');
//const withAuth = require('../../utils/auth');

//create new ingredient
//called from public/js/newpost.js
router.post('/', async (req, res) => {
  try {
    //console.log("ingredientRoutes - create");
    //create new ingredient and include current users id from session
    
    const newRecipeIngredient = await RecipeIngredient.create({
      ...req.body,
    });
   
    const recipeingredient = newRecipeIngredient.get({ plain: true })
    
    const ingredientUser = await IngredientUser.create({
      "ingredient_id" : recipeingredient.id,
      "user_id" : req.session.user_id,
    });
    
    res.status(200).json(newIngredient);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update one ingredient based on id
router.put('/:id', async(req, res) => {
  try {
    const ingredientData = await Ingredient.update({
      quantity: req.body.quantity,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(ingredientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete one ingredient based on id

router.delete('/:id', async (req, res) => {
  try {
    const ingredientData = await Ingredient.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!ingredientData) {
      res.status(404).json({ message: 'No ingredient found with this id!' });
      return;
    }

    res.status(200).json(ingredientData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;