-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


--Basic Select Statement

--1
-- SELECT first_name AS first, last_name AS last
-- FROM employees;

--2
-- SELECT DISTINCT department_id FROM employees

--3
-- SELECT * FROM employees ORDER BY first_name DESC

--4
-- SELECT first_name, last_name, salary*0.15 AS PF FROM employees

--5
-- SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC

--6
-- SELECT SUM(salary) AS salary_total FROM employees

--7
-- SELECT MAX(salary), MIN(salary) FROM employees

--8
-- SELECT AVG(salary) AS average_salary FROM employees

--9
-- SELECT COUNT(employee_id) AS employee_number FROM employees

--10
-- SELECT UPPER(first_name) FROM employees 

--11
-- SELECT first_name, SUBSTRING(first_name, 1, 3)
-- FROM employees

--12
-- SELECT (first_name|| ' ' ||last_name) AS full_name FROM employees

--13
-- SELECT (first_name|| ' ' ||last_name) AS full_name, length((first_name|| ' ' ||last_name)) AS name_length FROM employees
 
 --14
--  SELECT first_name FROM employees WHERE first_name LIKE '^[0-9]'

--15
SELECT * FROM ______ LIMIT 10


--restricting and sorting

--1
-- SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000 ORDER BY salary ASC

--2
-- SELECT first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31'

--3
-- SELECT first_name FROM employees WHERE first_name LIKE '%e%' AND first_name LIKE '%c%'

--4
-- SELECT employees.last_name, employees.salary, jobs.job_title
-- FROM employees
-- INNER JOIN jobs
-- ON employees.job_id = jobs.job_id
-- WHERE jobs.job_title != 'Programmer' AND jobs.job_title != 'Shipping Clerk' 

--5
-- SELECT last_name FROM employees WHERE LENGTH(last_name) = 6

--6
-- SELECT last_name FROM employees WHERE SUBSTRING(last_name,3,1)='e'

--7
-- SELECT jobs.job_title
-- FROM employees
-- INNER JOIN jobs
-- ON employees.job_id = jobs.job_id

--8
-- SELECT * FROM employees WHERE last_name LIKE '%Jones%' OR last_name LIKE '%Blake%' OR last_name LIKE '%Scott%' OR last_name LIKE '%King%' OR last_name LIKE '%Ford%'

