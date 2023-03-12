//call API to actually update one ingredient
async function getFact() {

  var factEl = document.querySelector(".fun-fact");
  
  const response = await fetch('https://api.fungenerators.com/fact/random?category=Food' , {
    method: 'GET',
    body: JSON.stringify(),
    headers: { 
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'X-Fungenerators-Api-Secret': 'ToqABneuROFSmGwyxpJ2mgeF',
    }
   
  }).then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data.contents.fact);
    factEl.textContent = data.contents.fact;

  })

  

  


  
}

  getFact();