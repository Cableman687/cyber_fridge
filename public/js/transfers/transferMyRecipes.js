const transferMyRecipes = async (event) => {
    event.preventDefault();

    document.location.replace('/recipes');

};
  
document.querySelector('#recipes-button').addEventListener('click', transferMyRecipes);