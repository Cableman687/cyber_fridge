
  # [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # Cyber-fridge

  ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Test Instructions](#test-instructions)
 - [Credits](#credits)
 - [Questions](#questions)
  
  ## Description
  This is an inventory management application specifically designed to track the food items in a users fridge. It allows logged in users to add/update/delete quantities of food items in their fridge and create recipes from the food items in their fridge. Users can choose to view recipes to see if they have the relevent ingredients in their fridge and they can choose to cook a recipe which will automatically update the quantities of food items left in their fridge. The fridge contents are also visually represented via a chart created using Chart.js.

  Users can create an account and login and their session details are stored utilising the "express-session" package. Returning users will be authenticated against their username and password. Passwords are encrypted using bcrypt.

  The application follows the Model View Controller pattern. The Controller contains routes for the API and routes to render the content using Handlebars.js. The Views holds the Handlebars.js files for rendering and The Model is an abstraction or representation of the tables in the MySql database and holds the files that define the data. Sequelize is the ORM used. Communication between the browser and server is done using a RESTful API and is achieved using Node.js and Express.js. 
  
  The application is developed using the following technologies:
  - Javascript
  - Node.js
  - Sequelize
  - MySQL2
  - Express.js
  - Dotenv package
  - Handlebars.js
  - Bootstrap
  - Chart.js
  - Sequelize

  One of the main challenges in developing this application was designing a flexible database schema that allowed the data to be stored and retrieved easily and could accommodate all the functionality we wanted to build into the application. 


  ## Installation
  Ensure node is installed. Test by running 
  ```
  node -v
  ```

  To install this package run:
  ```
  npm install
  ```

  ## Usage
  To run this application ensure you are in the main cyber-fridge directory. 
  
  The database has been seeded already but to reseed run :
```
npm run seed
```

  To start the server run:
```
npm start
```
You should see the server startup message:

![Here is a screenshot showing the server started.](/public/images/server-start.png)

Once the server is running you can open your browser and enter:
```
http://localhost:3001/

```

You will be presented with the Home Page:
![Here is a screenshot showing the home page.](/public/images/home.png)

To create a login, click the "Sign up instead" button. Enter your details and click "Submit".

![Here is a screenshot showing the login page.](/public/images/login.png)

Once logged in you can start by adding ingredients to your fridge. To view the ingredients in your fridge click the "My Fridge" button. All ingredients and their quantities are displayed. The charts also show quantities of each ingredients and numbers of items in each category.

![Here is a screenshot showing the comments.](/public/images/myfridge.png)

To create a new Recipe click the "Add recipe" button. Fill in the Recipe name and proceed to the next step where you enter the ingredients. All previously added ingredients will be displayed with quantities as you enter your new ingredients.

![Here is a screenshot showing the update page.](/public/images/addrecipe.png)

To view a recipe click the My Recipes button and click on your selected recipe. The ingredients will be displayed together with the quantities needed for the recipe and the quantities available in your fridge.

![Here is a screenshot showing the new post page.](/public/images/myrecipe.png)

You can choose to cook the recipe by clicking on the "Cook This!" button. The quantities of ingredients needed in the recipe will be deducted from the quantities available in your fridge.

When you are finished, click "Logout" to logout.


  ## License
  This project is covered by the "The MIT License" license.
  For more details click on the link below:
  [License](https://opensource.org/licenses/MIT)
  
  
  ## Test Instructions
  The application can be tested by following the instructions above under the Usage section.


  ## Credits
  We would like to thank the instructors at UWA Bootcamp. 
  
  ## Questions
 If you have any questions or feedback please contact us. Details are below. As this is a learning challenge we would appreciate any feedback, or ideas for improvement.

 Github : https://github.com/HelenELee , https://github.com/Cableman687, https://github.com/PanosGian

 Email : helenelee3@outlook.com
  
