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

-- SELECT avg(number_oscars) AS average_number_oscars FROM actors;

-- SELECT * DISTINCT FROM actors ORDER BY number_oscars DESC;

-- SELECT * FROM actors WHERE age > '01/01/1970'

-- SELECT * FROM actors WHERE first_name = 'David' OR first_name = 'Morgan' OR first_name = 'Will'

-- UPDATE actors SET first_name = 'Matt' WHERE first_name = 'Matt' AND last_name = 'Damon'
-- RETURNING
-- actor_id,
-- first_name,
-- last_name,
-- birthdate;

-- UPDATE actors SET number_oscars = '4' WHERE first_name = 'George' AND last_name = 'Clooney'
-- RETURNING
-- actor_id,
-- first_name,
-- last_name,
-- age,
-- number_oscars;

-- ALTER TABLE actors RENAME COLUMN age TO birthdate  
-- SELECT * FROM actors

-- DELETE FROM actors WHERE actor_id = 4
-- RETURNING actor_id, first_name, last_name, birthdate, number_oscars

-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- UPDATE actors SET first_name = 'Matt' WHERE first_name = 'Maty' AND last_name = 'Damon'
-- RETURNING
-- actor_id,
-- first_name,
-- last_name,
-- birthdate;

-- SELECT * FROM movies

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- CREATE TABLE producers (
-- 	producer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (50) NOT NULL,
-- 	productions INTEGER NOT NULL,
-- 	FOREIGN KEY (productions) REFERENCES movies (movie_id)
-- )

-- SELECT * FROM producers

-- INSERT INTO producers (first_name, last_name, productions)
-- VALUES
-- ('Lawrence', 'Bender',(SELECT movie_id FROM movies WHERE movie_title = 'Good Will Hunting')),
-- ('Jerry', 'Weintraub',(SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven'))

