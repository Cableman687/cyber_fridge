const transferMyFridge = async (event) => {
    event.preventDefault();

    document.location.replace('/fridge');

};
  
// document.querySelector('#fridge-button').addEventListener('click', transferMyFridge);

const fridgeButtons = document.querySelectorAll('.fridge-button');

fridgeButtons.forEach((curr) => {
    curr.addEventListener('click', transferMyFridge);
})