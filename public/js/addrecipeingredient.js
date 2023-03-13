//pop modal to dsiplay errors
function showError(msg) {
    document.querySelector('#dialog-error-msg').innerHTML =msg;
    document.querySelector('#dialog').classList.remove("hidden");
       $( function() {
             $( "#dialog" ).dialog();
       } );
}
//called when Add Ingredient button clicked
const addRecipeIngredientHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the form
    
    const recipe_id = document.querySelector('#recipe_id').value.trim();
    //watch out for "&"
    const recipe_name = document.querySelector('#recipe_name').value.trim().replace("&", "%26");
    const ingredient_id = $('#ingredient_id :selected').val();
    const ingredient_quantity = document.querySelector('#ingredient_quantity').value.trim();

    if (recipe_id && ingredient_id && ingredient_quantity) {
      if (ingredient_id != "" & ingredient_quantity != "") {
              // Send a POST request to the API endpoint to create recipe ingredient
              const response = await fetch('/api/recipes/addrecipeingredient', {
                method: 'POST',
                body: JSON.stringify({ recipe_id, ingredient_id, ingredient_quantity }),
                headers: { 'Content-Type': 'application/json' },
              })
              .then(function (response) {
                //convert to JSON
                return response.json();
              })
              .then(function (data) { 
                  document.location.replace(`/addrecipeingredient?id=${recipe_id}&name=${recipe_name}`);
                  
            });
      } else {
        showError("Please enter enter all ingredient details");
      }
  
      
    } else {
      //if nothing entered in form inform user - validation
      showError("Please enter the recipe name before adding ingredients");
      
    }
    
  };

  

  //added listener to button
  document
  .querySelector('#new-ingredient')
  .addEventListener('submit', addRecipeIngredientHandler);

