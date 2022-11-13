-- Database: Hollywood1

-- DROP DATABASE IF EXISTS "Hollywood1";

-- CREATE DATABASE "Hollywood1"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Cameron','Diaz','09/12/1980', 7);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Lindsay','Lohan','02/04/1991', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES 
-- ('Penelope', 'Cruz', '03/05/1960', 4),
-- ('Julia', 'Roberts', '02/05/1995', 7),
-- ('Meryl', 'Streep', '04/08/1957', 10)

-- SELECT * FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('','','','');

-- we receive an error of invalid input
