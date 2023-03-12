const transferMyRecipes = async (event) => {
    event.preventDefault();

    document.location.replace('/recipes');

};
  
// document.querySelector('#recipes-button').addEventListener('click', transferMyRecipes);

const recipesButtons = document.querySelectorAll('.recipes-button');

console.log(recipesButtons);

recipesButtons.forEach((curr) => {
    curr.addEventListener('click', transferMyRecipes);
})