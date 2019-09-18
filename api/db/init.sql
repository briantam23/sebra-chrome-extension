CREATE DATABASE sebra;
use sebra;

CREATE TABLE consumers (
  fname VARCHAR(90),
  lname VARCHAR(90)
);

INSERT INTO consumers
  (fname, lname)
VALUES
  ('Jonathan', 'Ive'),
  ('Keanu', 'Reeves');