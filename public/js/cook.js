const cookFormHandler = async (event) => {
    // Stop the browser from submitting the form so that we can do so with javascript.
    event.preventDefault();

    // Gather the data from the form input elements on the page.
    const name = document.querySelectorAll('.ingredient-name');
    const requiredQuantity = document.querySelectorAll('.required-quantity');
    const currentQuantity = document.querySelectorAll('.current-quantity');
    
    let nameArr = [];
    let requiredArr = [];
    let currentArr = [];
    let newArr = [];

    //Generate Arrays for each ingredient element
    name.forEach((curr) => {
        nameArr.push(curr.innerText);
    })

    requiredQuantity.forEach((curr) => {
        requiredArr.push(curr.innerText);
    })

    currentQuantity.forEach((curr) => {
        currentArr.push(curr.innerText);
    })

    for(var i = 0; i < currentArr.length; i++){
        let newQuant = currentArr[i] - requiredArr[i];
        newArr.push(newQuant);
    }
    
    // console.log(nameArr);
    // console.log(requiredArr);
    // console.log(currentArr);
    // console.log(newArr);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(id);

    if (nameArr && newArr) {

        let responseArray = []
    
        async function pushUpdates() {
    
            for(var i = 0; i < nameArr.length; i++){
    
                let nameElement = nameArr[i]
                let newElement = newArr[i]
    
                console.log(nameElement + " " + newElement)
    
                const response = await fetch(`/api/recipes/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({nameElement , newElement}),
                    headers: { 'Content-Type': 'application/json' },
                });
    
                responseArray.push(response);
                
            }
        }

        await pushUpdates();
        
        // Recipe cook was only returning 'false'{bug}. So false has been used to continue reload operation of landing page.
        if (!responseArray.ok) {
            document.location.replace('/');
            alert('Recipe Cooked!');
            } else {
            
            alert('Cook Failed!');
        }
    }
        
    };

    



// if both of these have a value (email & password)

  
document
.querySelector('#cook-button')
.addEventListener('click', cookFormHandler);