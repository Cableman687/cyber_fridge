const transferAddRecipe   = async (event) => {
    event.preventDefault();

    document.location.replace('/addrecipe');

};
  
document.querySelector('#recipe-button').addEventListener('click', transferAddRecipe);