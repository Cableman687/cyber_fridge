$(function () {
    var categories = [
      'Meat',
      'Fish',
      'Poultry',
      'Dairy',
      'Vegetables',
      'Fruit',
      'Cereals',
      'Beef',
      'Chicken',
      'Lamb',
      'Pasta',
    ];
    $('#category').autocomplete({
      source: categories,
      /*
      change: function (event, ui) {
        if(!ui.item){
            $(event.target).val("");
        }
      }, 
      focus: function (event, ui) {
        return false;
     }*/
    });

})