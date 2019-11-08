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
  $("#show-pizza").text(newPizza);
  console.log(newPizza);
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var topping1 = $("#topping1").val();
    var topping2 = $("#topping2").val();
    var topping3 = $("#topping3").val();
    var topping4 = $("#topping4").val();
    var topping5 = $("#topping5").val();
    var topping6 = $("#topping6").val();
    // put toppings in if loop

    newPizza.addTopping(topping1);

    showPizza();

  });
});
