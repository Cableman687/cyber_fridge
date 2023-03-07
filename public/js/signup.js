const signUpFormHandler = async (event) => {
    // Stop the browser from submitting the form so that we can do so with javascript.
    event.preventDefault();
  
    // Gather the data from the form input elements on the page.
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // if both of these have a value (email & password)
    if (name && email && password) {
      // Send the email and password to the server.
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
        alert('Account Created Successfully!');
      } else {
        
        alert('Failed to Sign Up');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('click', signUpFormHandler);