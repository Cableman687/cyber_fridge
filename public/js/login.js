const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so that we can do so with javascript.
  event.preventDefault();

  // Gather the data from the form input elements on the page.
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // if both of these have a value (email & password)
  if (email && password) {
    // Send the email and password to the server.
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginFormHandler);
