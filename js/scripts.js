function Pizza() {
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
}

Pizza.prototype.calcPrice = function(toppingsNumber, size) {
  var price = "";
  if (size === "small potatoes") {
    if (toppingsNumber < 3) {
      price = 8;
    } else if (toppingsNumber < 6) {
      price = 9;
    } else {
      price = 10;
    }
  } else if (size === "happy medium") {
    if (toppingsNumber < 3) {
      price = 10;
    } else if (toppingsNumber < 6) {
      price = 11;
    } else {
      price = 12;
    }
  } else if (size === "by and large") {
    if (toppingsNumber < 3) {
      price = 12;
    } else if (toppingsNumber < 6) {
      price = 13;
    } else {
      price = 14;
    }
  }
  return price;
}

var newPizza = new Pizza();

function showPizza(pizzaShow) {
  $("#new-pizza").hide();
  $("#show-pizza").show();
  $("#show-size").text(newPizza.size);

  $("#show-price").text(newPrice);

  for (var i = 0; i < 7; i++) {
    if (newPizza.toppings[i]) {
      $("#show-toppings").append("<li>" + newPizza.toppings[i] + "</li>");
    }
  }
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#input-size").val();

    var topping1 = $("input:checkbox[id=topping1]:checked").val();
    var topping2 = $("input:checkbox[id=topping2]:checked").val();
    var topping3 = $("input:checkbox[id=topping3]:checked").val();
    var topping4 = $("input:checkbox[id=topping4]:checked").val();
    var topping5 = $("input:checkbox[id=topping5]:checked").val();
    var topping6 = $("input:checkbox[id=topping6]:checked").val();

    newPizza.setSize(inputSize);

    newPizza.addTopping(topping1);
    newPizza.addTopping(topping2);
    newPizza.addTopping(topping3);
    newPizza.addTopping(topping4);
    newPizza.addTopping(topping5);
    newPizza.addTopping(topping6);

    newPizza.toppings = newPizza.toppings.filter(word => word);

    newPrice = newPizza.calcPrice(newPizza.toppings.length, inputSize);
console.log(newPizza.toppings);
    showPizza();

  });
});
