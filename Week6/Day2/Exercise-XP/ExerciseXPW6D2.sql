-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

--EXERCISE XP2 W6D2

--select all the culomns from the customer table
-- SELECT * FROM customer;

--query the first and last names in an alias full_name
-- SELECT first_name || ' ' || last_name AS full_name
-- FROM customer

--query all the create_dtae distinctly
-- SELECT DISTINCT create_date FROM customer  

--query all cutomer details by first name descending
-- SELECT * FROM customer ORDER BY first_name DESC

--query film id, title, description, year of release, and rental rate based on rental rate ascending
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

--query the address and phone number  of all customers living in texas district
-- SELECT address, phone FROM address WHERE district = 'Texas'

--query movie deatils of movies when id is either 15 or 150
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150

--query film id, title, description, length, and rental rate based on your favorite movie
-- SELECT film_id, title, description,length, rental_rate FROM film WHERE title = 'Cider Desire'


--query film id, title, description, length, and rental rate based on your favorite movie first two letters
-- SELECT film_id, title, description,length, rental_rate FROM film WHERE title LIKE 'Ci%' 

--query the 10 cheapest films
-- SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10

-- query the next 10 cheapest films
-- SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10 OFFSET 10 

-- query and join the customer and payment table 
-- SELECT payment.amount, payment.payment_date, customer.customer_id
-- FROM payment
-- INNER JOIN customer
-- ON customer.customer_id = payment.customer_id
-- ORDER BY customer_id

--query all the movies not in the inventory
-- SELECT * FROM inventory WHERE last_update NOT IN (SELECT last_update FROM film)

--query which city is in which country
-- SELECT city, country 
-- FROM city
-- INNER JOIN country 
-- ON city.country_id = country.country_id




