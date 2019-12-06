-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 06, 2019 at 10:26 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Type` varchar(10) NOT NULL,
  `Image` varchar(20) NOT NULL,
  `Text` text NOT NULL,
  `Builds` varchar(200) NOT NULL,
  `Github` varchar(70) NOT NULL,
  `Site` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `Name`, `Type`, `Image`, `Text`, `Builds`, `Github`, `Site`) VALUES
(1, 'Retro Roulette', 'Games', 'roulette_wheel.svg', 'My first game built using only JavaScript, which is still currently under construction. Using an assortment of arrays and functions, along with Greensock for animations, I was able to get the basic rules of roulette working. Animations still need some tweaks, and its not 100% bug free. Still a fun game, now are you feeling lucky?', 'illustrator, html-5, css-3, javascript, node', 'https://github.com/philipwood0912/retro_roulette', 'https://wood-retro-roulette.herokuapp.com/'),
(2, 'Cannabliss', 'Web', 'cannabliss.svg', 'Cannabliss is a simple application showcasing different strains of cannabis. Information is displayed on the page using arrays in JavaScript. This could further be developed into a full on cannabis application, and it will be something I will consider in the future.', 'photoshop, html-5, css-3, javascript, node', 'https://github.com/philipwood0912/HerokuHomework', ''),
(3, 'Atom Institutes', 'Data-Viz', 'heart.svg', 'An application developed to help raise awareness for organ regeneration. The web page features information regarding the topic, along with an interactive display detailing the process of regeneration. Animations were all done in JavaScript.', 'illustrator, html-5, css-3, javascript, node, sass', 'https://github.com/philipwood0912/organ_master', 'https://atom-institutes.herokuapp.com/'),
(4, 'American Mass Shootings', 'Data-Viz', 'america.svg', 'An interactive application developed to showcase the top 30 deadliest mass shooting in America. Using a database, information is retrieved using MySQL and display using Handlebars. JavaScript was used for SVG animations and interactivity.', 'illustrator, html-5, css-3, javascript, mysql, node, sass, handlebars', 'https://github.com/philipwood0912/interactive_site', ''),
(5, 'Lunar Agency', 'Web', 'lunar.svg', 'A web build for a mock web agency, as a school project. Built using HTML, CSS, and JavaScript, I was in charge of JavaScript functionality. The page features an interactive photo of the team where whoever is highlighted has their information displayed.', 'photoshop, html-5, css-3, javascript', 'https://github.com/philipwood0912/lunar_agency', ''),
(6, 'ThermoSecurity by HomeCom', 'Web', 'housecom.svg', 'A web build for a home monitoring system, hackathon school project. I was in charge of the database, routing and JavaScript for the project. It features a slideshow gallery for images, along with information displayed from a database.', 'photoshop, illustrator, html-5, css-3, javascript, node, mysql, sass,\r\nhandlebars', 'https://github.com/philipwood0912/hackathon', ''),
(7, 'Favorite Things', 'Data-Viz', 'dice.svg', 'A web application displaying my favourite things! These things are retrieved from a database using MySQL/Fetch and displayed on the page using Handlebars. JavaScript was used to parse through data, along with a slideshow gallery of the different categories.  ', 'illustrator, html-5, css-3, javascript, node, sass, mysql, handlebars', 'https://github.com/philipwood0912/favorite_things', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
