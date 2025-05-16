-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 09:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tmfood`
--

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Mì kim chi', '2025-05-12 09:06:46', '2025-05-12 09:06:46'),
(2, 'Mì lẩu thái', '2025-05-12 09:06:46', '2025-05-12 09:06:46'),
(3, 'Nước uống', '2025-05-12 09:07:14', '2025-05-12 09:07:14');

--
-- Dumping data for table `foods`
--

INSERT INTO `foods` (`id`, `name`, `categoryId`, `price`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'MÌ KIM CHI BÒ', 1, '65000', 'mì.jpg', '2025-05-12 09:48:53', '2025-05-12 09:48:53'),
(2, 'MÌ KIM CHI GÀ', 1, '65000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'MÌ KIM CHI THẬP CẨM', 1, '70000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'MÌ KIM CHI VIÊN HẢI SẢN', 1, '60000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'MÌ KIM CHI CÁ', 1, '50000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'MÌ KIM CHI BẠCH TUỘC', 1, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'MÌ KIM CHI SỤN', 1, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'MÌ KIM CHI BÒ CUỘN NẤM, TRỨNG', 1, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'MÌ LẨU THÁI BÒ', 2, '65000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'MÌ LẨU THÁI GÀ', 2, '65000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'MÌ LẨU THÁI THẬP CẨM', 2, '70000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'MÌ LẨU THÁI VIÊN HẢI SẢN', 2, '60000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'MÌ LẨU THÁI CÁ', 2, '59000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'MÌ LẨU THÁI BẠCH TUỘC', 2, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'MÌ LẨU THÁI SỤN', 2, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'MÌ LẨU THÁI BÒ CUỘN NẤM, TRỨNG', 2, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'MÌ LẨU THÁI HẢI SẢN', 2, '69000', 'mì.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Trà đào cam sả', 3, '56000', 'http://localhost:8080/uploads/nước.jpg', '2025-05-12 09:05:24', '2025-05-12 09:05:24'),
(30, 'Nước cam ép', 3, '50000', 'http://localhost:8080/uploads/nước.jpg', '2025-05-12 09:15:31', '2025-05-12 09:15:31');

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Bàn 1', 'selected', '2025-05-13 03:05:34', '2025-05-13 18:23:57'),
(2, 'Bàn 2', 'selected', '2025-05-13 03:05:42', '2025-05-13 18:26:45'),
(3, 'Bàn 3', 'selected', '2025-05-13 03:05:45', '2025-05-13 18:28:06'),
(4, 'Bàn 4', 'selected', '2025-05-13 03:05:48', '2025-05-13 18:29:42'),
(5, 'Bàn 5', 'empty', '2025-05-13 03:05:52', '2025-05-13 18:09:50'),
(6, 'Bàn 6', 'empty', '2025-05-13 03:05:55', '2025-05-13 18:10:37'),
(7, 'Bàn 7', 'empty', '2025-05-13 03:05:58', '2025-05-13 03:05:58'),
(8, 'Bàn 8', 'selected', '2025-05-13 03:06:02', '2025-05-13 18:31:18'),
(9, 'Bàn 9', 'empty', '2025-05-13 03:06:05', '2025-05-13 03:06:05'),
(10, 'Bàn 10', 'empty', '2025-05-13 03:06:09', '2025-05-13 03:06:09'),
(11, 'Bàn 11', 'empty', '2025-05-13 03:06:12', '2025-05-13 03:06:12'),
(12, 'Bàn 12', 'empty', '2025-05-13 03:06:15', '2025-05-13 03:06:15');

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'staff1', '123456', 'Trần Văn A', '082342322', '2025-05-12 09:05:59', '2025-05-12 09:05:59');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
