const transferAddIngredients   = async (event) => {
    event.preventDefault();

    document.location.replace('/addingredient');

};

// const addArray = [];

const addButtons = document.querySelectorAll('.add-button');

console.log(addButtons);

addButtons.forEach((curr) => {
    curr.addEventListener('click', transferAddIngredients);
})


  
// document.querySelector('.add-button').addEventListener('click', transferAddIngredients);