
CREATE TABLE orders (
   id SERIAL PRIMARY KEY,
   client_name VARCHAR(50) NOT NULL
);

CREATE TABLE items (
   id SERIAL PRIMARY KEY,
   name_item VARCHAR(50) NOT NULL,
   price INTEGER NOT NULL,
   order_id INTEGER REFERENCES orders (id)
);

INSERT INTO orders (client_name) 
VALUES ('Mary'), ('Kenny');

INSERT INTO items (name_item, price, order_id)
VALUES 
('chair', 50, (SELECT id FROM orders WHERE client_name='Mary')),
('computer', 400, (SELECT id FROM orders WHERE client_name='Mary')),
('TV', 1000, (SELECT id FROM orders WHERE client_name='Kenny'));


SELECT * FROM items;

CREATE or REPLACE FUNCTION get_total_price(ordernumber INTEGER)
RETURNS INTEGER AS 
$$
DECLARE totalPrice INTEGER;
BEGIN 
    SELECT SUM(price) FROM items WHERE items.order_id = ordernumber INTO totalPrice;
    RETURN totalPrice; 
END; 
$$
LANGUAGE plpgsql;

SELECT get_total_price(1) as total;