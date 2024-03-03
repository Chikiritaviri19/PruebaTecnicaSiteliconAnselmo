-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2024 a las 23:04:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_tecnica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `email`, `message`, `name`, `reason`) VALUES
(1, 'john.doe@example.com', 'Suspected involvement in cybercrime activities.', 'John Doe', 'Hacking'),
(2, 'jane.smith@example.com', 'Wanted for questioning in connection with a bank robbery.', 'Jane Smith', 'Robbery'),
(3, 'michael.johnson@example.com', 'Involved in drug trafficking across state lines.', 'Michael Johnson', 'Drug trafficking'),
(4, 'emily.brown@example.com', 'Suspected of organized crime activities.', 'Emily Brown', 'Organized crime'),
(5, 'william.lee@example.com', 'Allegedly involved in a Ponzi scheme.', 'William Lee', 'Fraud'),
(6, 'sophia.martinez@example.com', 'Wanted for questioning related to human trafficking.', 'Sophia Martinez', 'Human trafficking'),
(7, 'david.wilson@example.com', 'Suspected of money laundering activities.', 'David Wilson', 'Money laundering'),
(8, 'olivia.taylor@example.com', 'Involved in illegal arms trade.', 'Olivia Taylor', 'Arms trafficking'),
(9, 'ethan.anderson@example.com', 'Wanted for questioning regarding terrorist activities.', 'Ethan Anderson', 'Terrorism'),
(10, 'ava.white@example.com', 'Allegedly engaged in identity theft.', 'Ava White', 'Identity theft');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `last_name`, `name`, `password`, `phone_number`) VALUES
(1, 'john.doe@example.com', 'Doe', 'John', 'password123', '123456789'),
(2, 'jane.smith@example.com', 'Smith', 'Jane', 'password456', '987654321'),
(3, 'michael.johnson@example.com', 'Johnson', 'Michael', 'password789', '456789123'),
(4, 'emily.brown@example.com', 'Brown', 'Emily', 'passwordabc', '789123456'),
(5, 'william.lee@example.com', 'Lee', 'William', 'passworddef', '159357852'),
(6, 'sophia.martinez@example.com', 'Martinez', 'Sophia', 'passwordghi', '357951684'),
(7, 'david.wilson@example.com', 'Wilson', 'David', 'passwordjkl', '456123789'),
(8, 'olivia.taylor@example.com', 'Taylor', 'Olivia', 'passwordmno', '654789123'),
(9, 'ethan.anderson@example.com', 'Anderson', 'Ethan', 'passwordpqr', '789654123'),
(10, 'ava.white@example.com', 'White', 'Ava', 'passwordstu', '852963741');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
