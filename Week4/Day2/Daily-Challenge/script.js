let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = () => {
    groceries.fruits.forEach(element => {
        console.log(element);
    })
}
displayGroceries();

let cloneGroceries = () => {
    let user = client;
    client = "Betty"
    console.log(user, client);
    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.payed = false;
    console.log(shopping);
    console.log(groceries);
}
cloneGroceries();
