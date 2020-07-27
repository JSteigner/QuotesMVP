DROP DATABASE IF EXISTS quotes;
CREATE DATABASE quotes;

USE quotes;

CREATE TABLE quote (
  id int NOT NULL AUTO_INCREMENT,
  quote varchar(255) NOT NULL,
  likes int NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);