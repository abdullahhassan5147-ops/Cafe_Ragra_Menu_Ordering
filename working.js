// Abdullah hassan 26i-3110 SE-C

function orderespresso() {
    window.alert("Espresso Order Placed");
}

function orderLatte() {
    window.alert("Latte Order Placed");
}

function orderIcedMocha() {
    window.alert("Iced Mocha Order Placed");
}

function orderCappuccino() {
    window.alert("Cappuccino Order Placed");
}

function orderIcedCoffee() {
    window.alert("Iced Coffee Order Placed");
}

function orderHotChocolate() {
    window.alert("Hot Chocolate Order Placed");
}

function sendMessage(event) {
    event.preventDefault();
    window.alert("Thank you! Your message has been submitted.");
    event.target.reset();
}