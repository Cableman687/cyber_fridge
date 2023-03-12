const transferToLogin = async (event) => {
    event.preventDefault();

    document.location.replace('/login');

};
  
document.querySelector('#login-button').addEventListener('click', transferToLogin);