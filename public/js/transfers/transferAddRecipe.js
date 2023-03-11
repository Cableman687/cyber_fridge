const transferAddRecipe   = async (event) => {
    event.preventDefault();

    document.location.replace('/addrecipe');

};
  
document.querySelector('#fridge-button').addEventListener('click', transferAddRecipe);