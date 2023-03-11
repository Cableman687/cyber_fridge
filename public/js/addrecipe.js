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
    
    const  name = document.querySelector('#recipe-name').value.trim();
    
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
        console.log(data.id);   
        let new_id = data.id; 
        document.location.replace(`/addrecipeingredient?id=${new_id}&name=${name}`);               
   })
     
    //  if (response.ok) {
    //     //let data = response.json();
    //    //// console.log({data});
    //     //let dataParsed = JSON.parse(data);
    //    // console.log(dataParsed);
    //     //console.log("JSON " +  JSON.parse(response));
    //     // If successful, redirect the browser to the home page
    //    //TODO - get id when Recipe created and pass to line below
    //     //document.location.replace(`/addrecipeingredient?id=2&name=${name}`);
    //   } else {
    //     alert(response.statusText);
    //   }
    } else {
      //if nothing entered in form inform user - validation
      showError("Please enter the recipe name before adding ingredients");
      
    }
  };

  //added listener to button
  document
  .querySelector('#new-recipe')
  .addEventListener('submit', addRecipeHandler);