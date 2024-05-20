//-------------------------------------------BASIC ARAYS------------------------------------------------
// .......................................... STEP # 2 ...........................................
var products = [
    {
        name: "Laptop",
        price: 70000,
        inventory: {
            stock: 40,
            colorOption: ["Black", "White"],
        }
    },
    {
        name: "Smartphone",
        price: 50000,
        inventory: {
            stock: 60,
            colorOption: ["Blue", "Black"]
        }
    },
    {
        name: "Watch",
        price: 2000,
        inventory: {
            stock: 50,
            colorOption: ["Black", "Grey"]
        }
    }
];
// ................................................. STEP # 3 .....................................
function changeColor(products, newColor) {
    products.inventory.colorOption.push(newColor);
    if (newColor === "White") {
        products.price += products.price * 0.1;
    }
    else if (newColor === "Blue") {
        products.price -= products.price * 0.05;
    }
    else if (newColor === "Black") {
        products.price += products.price * 0.15;
    }
    else if (newColor === "Grey") {
        products.price -= products.price * 0.1;
    }
    else {
        console.log("Sorry! this ".concat(newColor, " is not available "));
    }
    ;
}
;
//....................................................STEP# 4.................................................
function displayProductDetails(products) {
    products.forEach(function (products) {
        console.log("Name: ".concat(products.name));
        console.log("Price: ".concat(products.price));
        console.log("Stock: ".concat(products.inventory.stock));
        console.log("Available colors: ".concat(products.inventory.colorOption));
    });
}
changeColor(products[0], "Grey");
changeColor(products[1], 'White');
changeColor(products[2], "Biue");
displayProductDetails(products);
