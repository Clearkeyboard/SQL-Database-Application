CREATE DATABASE burge_db;
USE burger_db;

CREATE TABLE quotes
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
