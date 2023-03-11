const AddRecipeFormHandler = async (event) => {
    // Stop the browser from submitting the form so that we can do so with javascript.
    event.preventDefault();
  
    // Gather the data from the form input elements on the page.
    const recipeName = document.querySelector('#recipe-name').value.trim();

    console.log(recipeName);

    if (recipeName) {
      // Send the email and password to the server.
      const response = await fetch('/api/recipes/addrecipe', {
        method: 'POST',
        body: JSON.stringify({ recipeName }),
        headers: { 'Content-Type': 'application/json' },
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data)
      })

      }

    
  
      // if (response.ok) {
      //   // document.location.replace('/');
      //   // alert('Recipe Created Successfully!');
      // } else {
        
      //   alert('Recipe Creation Failed!');
      // }
    // }
  };
  
  document
  .querySelector('#create-button')
  .addEventListener('click', AddRecipeFormHandler);