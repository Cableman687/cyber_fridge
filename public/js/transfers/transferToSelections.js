const transferToSelections = async (event) => {
    event.preventDefault();

    document.location.replace('/selections');

};
  
document.querySelector('#selections-button').addEventListener('click', transferToSelections);