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
  get_emoji: (category) => {
   
    if (category == "Meat") {
      icon = "🥩";
    } else if (category == "Fish") {
      icon = "🐠";
    } else if (category == "Vegetables") {
      icon = "🥕";
    } else if (category == "Fruit") {
      icon = "🍋";
    } else if (category == "Dairy") {
      icon = "🥛";
    } else if (category == "Condiments") {
      icon = "🧂";
    } else {
      icon = "🥄";
    }
    return `<span for="img" aria-label="food category">${icon}</span>`;
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
  },
  
  category_colours: function (context) { return context.map(function (obj) {
    console.log(obj.category);
    if (obj.category == "Meat"){
      return "#D22B2B";
    } else if (obj.category == "Fish"){
      return "#0096FF";
    } else if (obj.category == "Vegetables"){
      return "#61B329";
    } else if (obj.category == "Dairy"){
      return "#EADDCA";
    } else if (obj.category == "Fruit"){
      return "#FFEA00";
    } else {
      return "Grey";
    }
      });  },
  };
