-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE items (
-- item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(20) NOT NULL,
-- 	item_price SMALLINT NOT NULL
-- )

-- INSERT INTO items (item_name, item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- CREATE TABLE customers (
--     customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(20) NOT NULL,
-- 	last_name VARCHAR(20) NOT NULL
-- )

-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- SELECT * From customers;

--fetch all items
-- SELECT * FROM items;

--fetch all items above 80
-- SELECT * FROM items WHERE item_price > 80

--fetch all items above 300 inclusive
-- SELECT * FROM items WHERE item_price >= 300

--fetch all customers whose last name is smith
-- SELECT * FROM customers WHERE last_name = 'Smith'

--fetch all customers whose last name is jones
-- SELECT * FROM customers WHERE last_name = 'Jones'
--fetch all customers whose last name is NOT scott
-- SELECT * FROM customers WHERE first_name != 'Scott'