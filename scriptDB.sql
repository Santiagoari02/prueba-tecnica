DROP DATABASE IF EXISTS pruebadb;

CREATE DATABASE pruebadb;

USE pruebadb;

CREATE TABLE user (
	documento INT PRIMARY KEY NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    primer_apellido VARCHAR(20) NOT NULL,
    segundo_apellido VARCHAR(20),
    direccion VARCHAR(50) NOT NULL,
    telefono BIGINT NOT NULL,
    correo VARCHAR(30) NOT NULL,
    ciudad VARCHAR(20) NOT NULL,
    condicion_pago INT NOT NULL REFERENCES condicion_pago(id),
    valor_cupo INT,
    medio_pago INT REFERENCES medio_pago(id),
    estado BOOLEAN NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE condicion_pago (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE medio_pago (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

INSERT INTO condicion_pago (nombre) VALUES ('Contado');
INSERT INTO condicion_pago (nombre) VALUES ('Credito');

INSERT INTO medio_pago (nombre) VALUES ('Presencial');
INSERT INTO medio_pago (nombre) VALUES ('Transferencia');

INSERT INTO user (documento, nombre, primer_apellido, segundo_apellido, direccion, telefono, correo, ciudad, condicion_pago, medio_pago, estado)
VALUES (1002324354, 'Santiago', 'Ariza', 'Briceño', 'Calle 4', 3107825535, 'santiago@mail.com', 'Bucaramanga', 1, 1, FALSE);

INSERT INTO user (documento, nombre, primer_apellido, segundo_apellido, direccion, telefono, correo, ciudad, condicion_pago, valor_cupo, estado)
VALUES (98763290, 'Nicolas', 'Reyes', 'Paez', 'Calle 6', 3125695535, 'nicolas@mail.com', 'Piedecuesta', 2, 2000,  TRUE);