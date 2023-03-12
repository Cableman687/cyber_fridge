const transferAddRecipe   = async (event) => {
    event.preventDefault();

    document.location.replace('/addrecipe');

};
  
// document.querySelector('#recipe-button').addEventListener('click', transferAddRecipe);

const recipeButtons = document.querySelectorAll('.recipe-button');

recipeButtons.forEach((curr) => {
    curr.addEventListener('click', transferAddRecipe);
})