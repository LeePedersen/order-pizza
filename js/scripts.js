function Pizza() {
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
}

var newPizza = new Pizza();

function showPizza() {
  $("#show-pizza").text(newPizza.toppings);
  console.log(newPizza.toppings);
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();



    var topping1 = $("input:checkbox[id=topping1]:checked").val();
    var topping2 = $("input:checkbox[id=topping2]:checked").val();
    var topping3 = $("input:checkbox[id=topping3]:checked").val();
    var topping4 = $("input:checkbox[id=topping4]:checked").val();
    var topping5 = $("input:checkbox[id=topping5]:checked").val();
    var topping6 = $("input:checkbox[id=topping6]:checked").val();
  //  put toppings in for loop

console.log(topping1);

      newPizza.addTopping(topping1);
      newPizza.addTopping(topping2);
      newPizza.addTopping(topping3);
      newPizza.addTopping(topping4);
      newPizza.addTopping(topping5);
      newPizza.addTopping(topping6);

    showPizza();

  });
});
