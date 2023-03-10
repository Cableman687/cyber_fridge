const transferAddIngredients   = async (event) => {
    event.preventDefault();

    document.location.replace('/addingredient');

};
  
document.querySelector('#add-button').addEventListener('click', transferAddIngredients);