var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",

    port: 3306,

    user: "root", 

    password: "james1JOY",
    database: "bamazon",
});

function manageMenu() {
    var menu = [
        {
            type: "list",
            name: "menuChoice",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ];
    inquirer.prompt(menu).then(function(answer) {
        if (answer.menuChoice === "View Products for Sale") {
            console.log("Searching Products...");
            listProducts();
        } else if (answer.menuChoice === "View Low Inventory") {
            console.log("Checking Inventory...");
            listLowInventory();
        } else if (answer.menuChoice === "Add to Inventory") {
            console.log("Preparing to add inventory...");
            addInventory();
        } else if (answer.menuChoice === "Add New Product") {
            console.log("Preparing to add new product...");
            addProduct();
        }
    });
}

manageMenu();

function listProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nProduct ID: " + res[i].item_id + "\n" + "Item: " + res[i].product_name + "\n" + "Department: " + res[i].department_name + "\n" + "Price: " + res[i].price + "\n" + "Stock: " + res[i].stock_quantity);
        };
    });
};

function listLowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity<=5", function(err, res) {
        if (err) throw err;
        for (var j = 0; j < res.length; j++) {
            console.log("\nProduct ID: " + res[j].item_id + "\n" + "Item: " + res[j].product_name + "\n" + "Department: " + res[j].department_name + "\n" + "Price: " + res[j].price + "\n" + "Stock: " + res[j].stock_quantity);
        }
    });
}

function addInventory() {
    var invPrompt = [
        {
            type: "list",
            name: "invList",
            message: "Choose a product from the list below to add inventory:",
            choices: [res[k].product_name]
        }
    ];

    inquirer.prompt(invPrompt).then(function(answer) {
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            for (var k = 0; k < res.length; k++) {
                
            };
    
        });
    });

}

function addProduct() {
    connection.query("", function(err, res) {

    });

}