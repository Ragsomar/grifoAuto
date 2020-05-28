DROP DATABASE IF EXISTS grifoauto;

CREATE DATABASE grifoauto;

USE grifoauto;

CREATE TABLE vehicle (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    modele VARCHAR (100) NOT NULL,
    years VARCHAR (11) NOT NULL,
    motor VARCHAR (50) NOT NULL,
    interior VARCHAR (25) NULL
);

CREATE TABLE photo (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    photo VARCHAR (500) NOT NULL,
    color VARCHAR (50) NOT NULL,
    modele INT,
    FOREIGN KEY (modele) REFERENCES vehicle (id)
);