function showError(msg) {
    document.querySelector('#dialog-error-msg').innerHTML =msg;
    document.querySelector('#dialog').classList.remove("hidden");
       $( function() {
             $( "#dialog" ).dialog();
       } );
}

const addRecipeIngredientHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    console.log("addrecipeIngredientHandler");
    const recipe_id = document.querySelector('#recipe_id').value.trim();
    const recipe_name = document.querySelector('#recipe_name').value.trim();
    const ingredient_id = $('#ingredient_id :selected').val();
    const ingredient_quantity = document.querySelector('#ingredient_quantity').value.trim();
    
    console.log(recipe_id, recipe_name, ingredient_id, ingredient_quantity);

    
    if (recipe_id && ingredient_id && ingredient_quantity) {
      // Send a POST request to the API endpoint to create comment
        const response = await fetch('/api/recipes/addrecipeingredient', {
        method: 'POST',
        body: JSON.stringify({ recipe_id, ingredient_id, ingredient_quantity }),
        headers: { 'Content-Type': 'application/json' },
      });
      //alert(response.json().id);
      //console.log("RESPONSE " + JSON.stringify(response));
     // console.log("response - " + response.json());
      if (response.ok) {
        // If successful, redirect the browser to the home page
        //const new_id = JSON.parse(response).id;
        //alert(new_id);
        document.location.replace("/addrecipeingredient?id=2&name=recipe 2");
      } else {
        alert(response.statusText);
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