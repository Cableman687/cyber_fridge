//used to show errors in pop up modal
function showError(msg) {
    document.querySelector('#dialog-error-msg').innerHTML =msg;
    document.querySelector('#dialog').classList.remove("hidden");
       $( function() {
             $( "#dialog" ).dialog();
       } );
}
//called when you are adding a recipe for the first time
//just saves to Recipe table
const addRecipeHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    //ensure the name does not include "&" - messes up params in URL if "&" is part of recipe name
    const  name = document.querySelector('#recipe-name').value.trim().replace("&", "%26");
    
    
    if (name) {
          // Send a POST request to the API endpoint to create comment
            const response = await fetch('/api/recipes/addrecipe', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: { 'Content-Type': 'application/json' },
          }) .then(function (response) {
            //convert to JSON
            return response.json();
        })
        .then(function (data) {
            
            let new_id = data.id; 
            //redirect to page to add ingredients
            document.location.replace(`/addrecipeingredient?id=${new_id}&name=${name}`);               
      })
     
    
    } else {
      //if nothing entered in form inform user - validation
      showError("Please enter the recipe name before adding ingredients");
      
    }
  };

  //added listener to button
  document
  .querySelector('#new-recipe')
  .addEventListener('submit', addRecipeHandler);