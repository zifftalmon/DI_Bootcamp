-- Database: tableRelatioships

-- DROP DATABASE IF EXISTS "tableRelatioships";

-- CREATE DATABASE "tableRelatioships"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- PART 1

--1
-- CREATE TABLE customer 
-- (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customer_profile 
-- (
-- 	profile_id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT false,
-- 	customer_id INTEGER UNIQUE REFERENCES customer (customer_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )
--2
-- INSERT INTO customer (first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

--3 
-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES
-- (TRUE,(SELECT customer_id FROM customer WHERE first_name='John' AND last_name='Doe')),
-- (FALSE,(SELECT customer_id FROM customer WHERE first_name='Jerome' AND last_name='Lalu'))

--4

--4.1
-- SELECT customer.first_name
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = TRUE

--4.2
-- SELECT customer.first_name, customer_profile.isLoggedIn
-- FROM customer
-- LEFT JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id

--4.3
-- SELECT first_name AS noy_logged_in, isLoggedIn
-- FROM customer
-- FULL JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id
-- WHERE isLoggedIn IS NOT TRUE

-- PART 2

--1
-- CREATE TABLE book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR (50) NOT NULL,
-- 	author VARCHAR (50) NOT NULL
-- )

--2
-- INSERT INTO book(title,author)
-- VALUES
-- ('Alice in Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To Kill a Mockingbird', 'Harper Lee')

--3
-- CREATE TABLE student (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR (50) NOT NULL,
-- 	age SMALLINT NOT NULL CHECK (age<=15)
-- )

--4
-- INSERT INTO student (name, age)
-- VALUES
-- ('John', 12), ('Lera', 11), ('Patrick', 10),('Bob', 14)

--5
-- CREATE TABLE book_student (
-- 	book_fk_id INTEGER REFERENCES book (book_id) ON DELETE SET NULL ON UPDATE SET NULL,
-- 	student_fk_id INTEGER REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date DATE,
-- 	PRIMARY KEY (book_fk_id, student_fk_id)
-- )

--6
-- INSERT INTO book_student (book_fk_id, student_fk_id, borrowed_date)
-- VALUES
-- (
--  (SELECT book_id FROM book WHERE title = 'Alice in Wonderland'),
--  (SELECT student_id FROM student WHERE name = 'John'),
--  '2022-04-23'
-- ),
-- (
--  (SELECT book_id FROM book WHERE title = 'Harry Potter'),
--  (SELECT student_id FROM student WHERE name = 'Lera'),
--  '2021-08-11'
-- ),
-- (
--  (SELECT book_id FROM book WHERE title = 'To Kill a Mockingbird'),
--  (SELECT student_id FROM student WHERE name = 'John'),
--  NOW()
-- ),
-- (
--  (SELECT book_id FROM book WHERE title = 'Harry Potter'),
--  (SELECT student_id FROM student WHERE name = 'Patrick'),
--  '2019-12-01'
-- )


--7

--7.1
SELECT * FROM book_student

--7.2
SELECT student.name, book_student.borrowed_date
FROM book_student
INNER JOIN student ON student_fk_id = student_id
INNER JOIN book ON book_fk_id = book_id

--7.3
SELECT ROUND(AVG(age))
FROM book_student
INNER JOIN student ON student_fk_id = student_id
INNER JOIN book ON book_fk_id = book_id





