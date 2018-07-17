var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",

    port: 3306,

    user: "root", 

    password: "james1JOY",
    database: "bamazon",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItems();
});

function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nProduct ID: " + res[i].item_id + "\n" + "Item: " + res[i].product_name + "\n" + "Department: " + res[i].department_name + "\n" + "Price: " + res[i].price + "\n" + "Stock: " + res[i].stock_quantity);
        };

        shop();
        
    });
};

function shop() {
    var startShop = [
        {
            type: "text",
            name: "askID",
            message: "What is the ID of the item that you would like to purchase?"
        },
        {
            type: "text",
            name: "askHowMany",
            message: "How many units would you like to purchase?"
        }
    ];
    inquirer.prompt(startShop).then(function(answer) {
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                if (answer.askID === res[i].item_id) {
                    console.log(res.product_name)
                } else {
                    console.log("Item not found...")
                };
            };
        });
    });
};

