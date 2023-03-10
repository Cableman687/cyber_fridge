const transferMyFridge   = async (event) => {
    event.preventDefault();

    document.location.replace('/fridge');

};
  
document.querySelector('#fridge-button').addEventListener('click', transferMyFridge);