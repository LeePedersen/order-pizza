function Pizza() {
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
}

Pizza.prototype.calcPrice = function() {
  var price = "";
  console.log(this.toppings.length);
  console.log(this.size);
  if (this.size === "small potatoes") {
    if (this.toppings.length < 3) {
      price = 8;
    } else if (this.toppings.length < 6) {
      price = 9;
    } else {
      price = 10;
    }
  } else if (this.size === "happy medium") {
    if (this.toppings.length < 3) {
      price = 10;
    } else if (this.toppings.length < 6) {
      price = 11;
    } else {
      price = 12;
    }
  } else if (this.size === "by and large") {
    if (this.toppings.length < 3) {
      price = 12;
    } else if (this.toppings.length < 6) {
      price = 13;
    } else {
      price = 14;
    }
  } else {
    alert("Congratulations, you successfully broke it");
  }
  this.price = price;
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();

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

    newPizza.calcPrice();

    function showPizza(pizzaShow) {
      $("#new-pizza").hide();
      $("#show-pizza").show();
      $("#show-size").text(newPizza.size);
      $("#show-price").text(newPizza.price);

      if (!newPizza.toppings.length) {
        $("#show-toppings").append("<li>" + "none because you're a boring person" + "</li>");
      }

      for (var i = 0; i < 7; i++) {
        if (newPizza.toppings[i]) {
          $("#show-toppings").append("<li>" + newPizza.toppings[i] + "</li>");
        }
      }
    }

    showPizza();

  });
});
