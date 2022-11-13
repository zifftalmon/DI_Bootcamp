-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR(50) NOT NULL,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson','03/10/1980')

-- SELECT * FROM students

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Ziv', 'Talmon', '08/01/2000');

--fetch all data from table
-- SELECT * FROM students

-- featch all last_name & first_name
-- SELECT first_name, last_name FROM students

--fetch the last&first names of the student whose:

--id is equal to 2
-- SELECT first_name, last_name FROM students WHERE student_id = 2

--last name is benichou and first name is marc
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

--last name is benichou or first name is marc
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

--first name contain the letter a
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'


--first name start with the letter a
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%'


-- first name that ends with the letter a
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'


--first name second to last letter is a
-- SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name,LENGTH(first_name)-1,1)='a'

--ids equal to 1 and 3
-- SELECT first_name, last_name FROM students WHERE student_id = 1 AND student_id=3

--students whose birthdates equal to or come after 1/01/2000
-- SELECT * FROM students WHERE birth_date >= '01/01/2000'