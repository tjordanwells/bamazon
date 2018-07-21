var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "127.0.0.1",

    port: 3306,

    user: "root", 

    password: "password",
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
    //     var table = new Table({
    //         chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
    //                , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
    //                , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
    //                , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    //       });
           
    //       table.push(
    //           ["Product ID", "Item", "Department", "Price", "Stock"],
    //           [res[0].item_id, res[0].product_name, res[0].department_name, res[0].price, res[0].stock_quantity],
    //           [res[1].item_id, res[1].product_name, res[1].department_name, res[1].price, res[1].stock_quantity],
    //           [res[2].item_id, res[2].product_name, res[2].department_name, res[2].price, res[2].stock_quantity],
    //           [res[3].item_id, res[3].product_name, res[3].department_name, res[3].price, res[3].stock_quantity],
    //           [res[4].item_id, res[4].product_name, res[4].department_name, res[4].price, res[4].stock_quantity],
    //           [res[5].item_id, res[5].product_name, res[5].department_name, res[5].price, res[5].stock_quantity],
    //           [res[6].item_id, res[6].product_name, res[6].department_name, res[6].price, res[6].stock_quantity],
    //           [res[7].item_id, res[7].product_name, res[7].department_name, res[7].price, res[7].stock_quantity],
    //           [res[8].item_id, res[8].product_name, res[8].department_name, res[8].price, res[8].stock_quantity],
    //           [res[9].item_id, res[9].product_name, res[9].department_name, res[9].price, res[9].stock_quantity]
    //       );
        
    //     console.log(table.toString());
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
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var j = 0; j < res.length; j++) {
            console.log("\nProduct ID: " + res[j].item_id + "\n" + "Item: " + res[j].product_name + "\n" + "Department: " + res[j].department_name + "\n" + "Price: " + res[j].price + "\n" + "Stock: " + res[j].stock_quantity);
        }

        var invPrompt = [
            {
                type: "input",
                name: "invNum",
                message: "Choose a product from the list above to add inventory to item:",
            }, 
            {
                type: "input",
                name: "invInc",
                message: "How many items are you stocking today?"
            }
        ];
    
        inquirer.prompt(invPrompt).then(function(answer) {
            connection.query("SELECT products WHERE item_id = " + answer.invNum, function(err, res) {
                console.log(res);
            })
            connection.query("UPDATE products SET ? WHERE ?",[
                {
                    stock_quantity: answer.invInc
                }, 
                {
                    item_id: answer.invNum
                }], function(err, res) {
                if (err) throw err;
                console.log("Successfully added " + answer.invInc + " items to store.");
            });
        });

    });
}

function addProduct() {
    connection.query("", function(err, res) {

    });

}