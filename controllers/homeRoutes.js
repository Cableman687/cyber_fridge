const router = require('express').Router();
const { User , Ingredient } = require('../models');
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
    } else {
      res.render('pages/signup');
    }

  }catch (err) {
    res.status(500).json(err);
  }
  

});

module.exports = router;
