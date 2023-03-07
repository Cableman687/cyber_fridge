  function getCategories(obj, v) {
    obj[v.category] = (obj[v.category] || 0) + 1;
    // return the updated object
    return obj;
    // set the initial value as an object
  };


function countOccurences(theArray, prop) {
    //const property = prop;
  let i=0;
  let count = {};
  
    for (i in theArray) {
      if (theArray[i][prop] in count) {
        count[theArray[i][prop]]++;
      } else {
        count[theArray[i][prop]] = 1;
      }
    };
    console.log(count);
    return(count);
  };


module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
  json: function (context) { return JSON.stringify(context);  },
  labels: function (context) { return context.map(function (obj) {
    return obj.name;
      });  },
  quantities: function (context) { return context.map(function (obj) {
        return obj.quantity;
      });  },

  categories : function (context) {
    let newObject = countOccurences(context, "category");
    var keys = [];
    for (var key in newObject) {
       keys.push(key);
    }
    //console.log(keys);
    return keys;
  },
  category_count: function(context) {
    let newObject = countOccurences(context, "category");
    return Object.keys(newObject).map(function(key){return newObject[key]})
  }
  

  };
