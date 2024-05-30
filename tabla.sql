-- Crear la base de datos
CREATE DATABASE tienda_online;

-- Usar la base de datos
USE tienda_online;

-- Crear la tabla usuarios
CREATE TABLE usuarios (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    contacto VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    cedula VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    casa VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    metodo_pago VARCHAR(50) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);