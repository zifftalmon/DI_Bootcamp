-- Database: dvdrental2

-- DROP DATABASE IF EXISTS dvdrental2;

-- CREATE DATABASE dvdrental2
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

--Exercise 1

--1
-- SELECT * FROM language

--2
-- SELECT film.title, film.description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id

--3
-- CREATE TABLE new_film (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50)
-- )

-- INSERT INTO new_film (name)
-- VALUES
-- ('Who Framed Roger Rabbit?'),
-- ('Lady and the Tramp'),
-- ('Mary Poppins'),
-- ('Rubber'),
-- ('Harry Potter and the Chamber of Secrets'),
-- ('Mamma Mia!')

--4 
-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY NOT NULL,
-- 	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
-- 	language_id INTEGER REFERENCES language (language_id),
-- 	title VARCHAR(50),
-- 	score SMALLINT,
-- 	review_text TEXT,
-- 	last_update DATE
-- )

-- --5
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES
-- (
--  (SELECT id FROM new_film WHERE name='Who Framed Roger Rabbit?'),
--  (SELECT language_id FROM language WHERE language_id = 1),
--  'The Elusive Rabbit',
--   7,
--  'Great Movie! My family and I really enjoyed it!',
--   '20/03/2009'
-- ),
-- (
--  (SELECT id FROM new_film WHERE name='Lady and the Tramp'),
--  (SELECT language_id FROM language WHERE language_id = 1),
--  'Romantic Hounds',
--   4,
--   'Mediocre Movie about dogs and spaghetti',
--   '29/07/2012'
-- )

--6
-- DELETE FROM customer_review WHERE film_id = 2

--Exercise 2

--1
-- UPDATE film
-- Set language_id = 3
-- WHERE film_id BETWEEN 1 AND 15

--2
--it affects the last_update

--3
-- DROP TABLE customer_review

--4
-- SELECT * FROM rental WHERE return_date IS NULL   

--5
-- SELECT  
-- rental.rental_id,
-- rental.return_date,
-- payment.amount
-- FROM rental
-- INNER JOIN payment
-- ON rental.rental_id = payment.rental_id
-- WHERE rental.return_date IS NULL ORDER BY amount DESC LIMIT 30

--6
--6.1

-- SELECT film.title, film.description, film_actor.actor_id, actor.first_name, actor.last_name
-- FROM film
-- JOIN film_actor
-- ON film.film_id = film_actor.film_id
-- JOIN actor
-- ON film_actor.actor_id = actor.actor_id
-- WHERE film.description LIKE '%Sumo%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'

--6.2

-- SELECT film.title, film.description, film.rating, film.length, category.name
-- FROM film
-- JOIN film_category
-- ON film.film_id = film_category.film_id 
-- JOIN category
-- ON film_category.category_id = category.category_id
-- WHERE category.name = 'Documentary' AND film.rating = 'R' AND film.length < 60

--6.3
-- SELECT film.title, film.description, film.rental_rate, film.film_id, inventory.inventory_id, customer.first_name, customer.last_name, rental.return_date
-- FROM inventory
-- JOIN rental
-- ON inventory.inventory_id = rental.inventory_id 
-- JOIN film
-- ON inventory.film_id = film.film_id
-- JOIN customer
-- ON rental.customer_id = customer.customer_id
-- WHERE film.rental_rate <= 4.00 AND customer.first_name='Matthew' AND customer.last_name='Mahan' AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'

--6.4
-- SELECT film.title, film.description, film.replacement_cost, film.film_id, inventory.inventory_id, customer.first_name, customer.last_name
-- FROM inventory
-- JOIN rental
-- ON inventory.inventory_id = rental.inventory_id 
-- JOIN film
-- ON inventory.film_id = film.film_id
-- JOIN customer
-- ON rental.customer_id = customer.customer_id
-- WHERE film.title LIKE '%Boat%' OR film.description LIKE '%Boat%'  AND customer.first_name='Matthew' AND customer.last_name='Mahan' ORDER BY replacement_cost DESC
