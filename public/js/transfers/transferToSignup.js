const transferToSignup = async (event) => {
    event.preventDefault();

    document.location.replace('/signup');

};
  
document.querySelector('#signup-button').addEventListener('click', transferToSignup);