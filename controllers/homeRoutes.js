const router = require('express').Router();

const { User, Ingredient ,Recipe, RecipeIngredient, IngredientUser } = require('../models');

const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('pages/homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('pages/login');
});

// Create a new user account
router.get('/signup', (req, res) => {
  try{
    if (req.session.logged_in) {
      res.redirect('/');
      aler("You are already logged in!");
    } else {
      res.render('pages/signup');
    }

  }catch (err) {
    res.status(500).json(err);
  }
  

});

//****************Add Recipes************* */

//display page with option to add recipe name and button to add ingredient
router.get('/addrecipe', withAuth, (req, res) => {
  
  try {
    
    res.render('pages/addrecipe', {
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
    return;
  } catch(err) {
    res.status(500).json(err);
  }

});


//display page to allow user add ingredient - category, name, quantity
router.get('/addrecipeingredient', withAuth, async (req, res) => {
  
  try {
    //Get the ingredients from the users fridge to use
    //in drop down in form when adding ingredients
    //first find user based on id
    //then use that to in linked table to get ingredients
    const userData = await User.findOne({
      where: { id: req.session.user_id},
      include: [
        {
          model: Ingredient,
          through: IngredientUser,          
        },
      ],
     
    });
    
    const user = userData.get({ plain: true });

    //get all the ingredients added already to this recipe
    //use link table to join user with the recipe and ingredients
    const recipeData = await Recipe.findAll({
      where: { id: req.query.id },
      include : [
        {
          model: Ingredient,
          through: RecipeIngredient,
          attributes: [
            'id',
            'name',
            'category',
            'quantity',
          ],
          
        },
        {
          model: RecipeIngredient,
          attributes: [
            'ingredient_quantity',
          ]
        },
      ],
    }); 
  
   
    const recipes = recipeData.map((rec) => rec.get({plain: true}));
   //check if we have ingredients or just a recipe name
   //create new array to pass back to handlebars - contains name, category and quantity only
    if (recipes[0].ingredients.length && recipes[0].recipe_ingredients.length) {
      
      currentingredients = [];
      for (i=0; i<recipes[0].ingredients.length; i++) {
        let newIngredient = {
          "name": recipes[0].ingredients[i].name,
          "category": recipes[0].ingredients[i].category,
          "quantity": recipes[0].recipe_ingredients[i].ingredient_quantity
        }
        currentingredients.push(newIngredient);
      }
      
    }else {
      //got no previous ingredients
      currentingredients = [];
    }
    
    
    const adjustedName = req.query.name.replace("%26", "&");
    res.render('pages/addrecipeingredient', {
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
      recipe_id: req.query.id,
      recipe_name: req.query.name,
      user,
      currentingredients
    });
    return;
  //}
  } catch(err) {
    res.status(500).json(err); 
  }
});

//*************END ADD Recipes************ */


//display page to allow user add ingredient to fridge - category, name, quantity
router.get('/addingredient', withAuth, (req, res) => {
  
  try {
    
    res.render('pages/addingredient', {
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
    });
    return;
  //}
  } catch(err) {
    res.status(500).json(err); 
  }
});

//get all ingredients for logged in user
router.get('/fridge', withAuth, async(req, res) => {
  
  const userData = await User.findOne({
      where: { id: req.session.user_id},
      include: [
        {
          model: Ingredient,
          through: IngredientUser,          
        },
      ],
     // 
     // order: [['category', 'ASC']],
    });
    
    const user = userData.get({ plain: true });
    
    res.render('pages/fridge', {
      user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
      
    });
  
    return;
  //}

});


//get all recipes for logged in user
router.get('/recipes', withAuth, async(req, res) => {
  
  const recipeData = await Recipe.findAll({
      where: { user_id: req.session.user_id},
      order: [['name', 'ASC']],
    });

    
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    
    res.render('pages/recipe', {
      recipes,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
      
    });
  
    return;
  //}

});



// Show Recipe Contents
router.get('/recipes/:id', async (req, res) => {

  const recipeData = await Recipe.findAll({
    where: { id: req.params.id },
    include : [
      {
        model: Ingredient,
        through: RecipeIngredient,
        attributes: [
          'id',
          'name',
          'category',
          'quantity',
        ],
        
      },
      {
        model: RecipeIngredient,
        attributes: [
          'ingredient_quantity',
        ]
      },
    ],
  }); 

 
  const recipes = recipeData.map((project) => project.get({plain: true}));

  res.render('pages/viewRecipeContents', {
    recipes,
    
    logged_in: req.session.logged_in,
    user_name: req.session.user_name,
  });


});




module.exports = router;
