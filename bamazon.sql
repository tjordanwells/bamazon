DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Echo Dot", "Electronics", 49.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Apple TV 4K", "Electronics", 199.99, 85);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Bose SoundSport Wireless Headphones", "Electronics", 149.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Baratza Sette 30 Conical Burr Grinder 1130", "Home Goods", 249.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Vitamix 5200 Blender", "Home Goods", 297.95, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("iRobot Roomba 671 Robot Vacuum with Wi-Fi Connectivity", "Home Goods", 229.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Tanner Tees Tanner Tee", "Sporting Goods", 79.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Rukket 7x7 Baseball Net", "Sporting Goods", 69.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("New Balance Men's T4040v4 Turf Baseball Shoe", "Sporting Goods", 74.99, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Marucci AP5 Maple Baseball Bat", "Sporting Goods", 139.99, 10);