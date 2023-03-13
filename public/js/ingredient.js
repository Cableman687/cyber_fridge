//validation modal
function showError(msg) {
    document.querySelector('#dialog-error-msg').innerHTML =msg;
    document.querySelector('#dialog').classList.remove("hidden");
       $( function() {
             $( "#dialog" ).dialog();
       } );
}

const addIngredientHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the form
    
    const category = document.querySelector('#category').value.trim();
    const name = document.querySelector('#name').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
    
    if (category && name && quantity) {
      // Send a POST request to the API endpoint to create comment
      
      const response = await fetch('/api/ingredients', {
        method: 'POST',
        body: JSON.stringify({ category, name, quantity}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the fridge page
        document.location.replace('/fridge');
      } else {
        alert(response.statusText);
      }
    } else {
      //if nothing entered in form inform user - validation
      showError("Please complete the form before submitting");

    }
  };

  //added listener to button
  document
  .querySelector('#new-ingredient')
  .addEventListener('submit', addIngredientHandler);