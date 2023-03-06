function showError(msg) {
  document.querySelector('#dialog-error-msg').innerHTML =msg;
  document.querySelector('#dialog').classList.remove("hidden");
     $( function() {
           $( "#dialog" ).dialog();
     } );
}

//helper function - called when user updated quantity in fridge.handlebars
function updateThis(id){
    //get correct quantity field
    let quantity_field = "#quantity_" + id;
    //get new quantity value
    let new_quantity=id + "~" + $(quantity_field).val();
    //update hidden fields with new id/quantity - these value are used
    //to actually update the ingredient - see updateIngredientHandler
    $('#update-fields').val($('#update-fields').val() + ";" + new_quantity);
}

//helper function - called when user clicks checkbox indicating they want to delete an ingredient
function deleteThis(id){
  
    //assign field name to delete_field
    let delete_field = "#delete_" + id;
    const isChecked = $("#delete_" + id).is(":checked");
    if (isChecked) {
      //if checked add id to delete-fields
      $('#delete-fields').val($('#delete-fields').val() + ";" + id);
    } else {
      //unchecked then remove id from delete-fields
      let result = $('#delete-fields').val().replace(id, "");
      $('#delete-fields').val(result);
    }
    
}
//call API to actually update one ingredient
async function updateOneIngredient(id, quantity) {
  
  const response = await fetch('/api/ingredients/' + id, {
    method: 'PUT',
    body: JSON.stringify({quantity}),
    headers: { 'Content-Type': 'application/json' },
  });

  return response;
}

//call API to actually delete one ingredient
async function deleteOneIngredient(id, quantity) {
  
  const response = await fetch('/api/ingredients/' + id, {
    method: 'DELETE',
    /*body: JSON.stringify({quantity}),*/
    headers: { 'Content-Type': 'application/json' },
  });

  return response;
}

//called when fridge.handlebars form is submit

const updateIngredientHandler = async (event) => {
  event.preventDefault();

  // Collect values from the comment form
  //get values from hidden fields - these are the ingredients to actually updated/delete
  let updateQuantity = document.querySelector('#update-fields').value.trim().split(";");
  let updateDelete = document.querySelector('#delete-fields').value.trim().split(";");
  
  //remove blank values
  updateQuantity = updateQuantity.filter((val)=>{return val!=""});
  updateDelete = updateDelete.filter((val)=>{return val!=""});

  //check user has made updated before submitting
  if (updateQuantity.length < 1 && updateDelete.length < 1) {
    showError("Please make updates before submitting");
    return;
  }

  //loop through ingredients to be updated and call updateOneIngredient to actually update
  if (updateQuantity) {
    for (i=0; i< updateQuantity.length; i++) {
      //initial value may be blank because udpate-fields value will look like ";13~2;8~4"
      if (updateQuantity[i] != "") {
        //split into id and quantity
        let details = updateQuantity[i].split("~");
      
        const response = await updateOneIngredient(details[0], details[1] );
        //TO DO
        //what to do if one fails???
      } 
    }
  } 

  //loop through ingredients to be updated and call updateOneIngredient to actually update
  if (updateDelete) {
    for (i=0; i< updateDelete.length; i++) {
      //initial value may be blank because udpate-fields value will look like ";13~2;8~4"
      if (updateDelete[i] != "") {
      
        const response = await deleteOneIngredient(updateDelete[i]);
        //TO DO
        //what to do if one fails???
      } 
    }
  } 

  //if (response.ok) {
    // If successful, redirect the browser to the home page
    document.location.replace('/fridge');
  //} else {
   // alert(response.statusText);
  //}
};


//added listener to button
document
.querySelector('#update-ingredients')
.addEventListener('submit', updateIngredientHandler);

