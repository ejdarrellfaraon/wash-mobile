-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2019 at 06:01 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_washtogov2`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ownersinfo`
--

CREATE TABLE `tbl_ownersinfo` (
  `fld_ownersid` int(11) UNSIGNED NOT NULL,
  `fld_ownersfname` varchar(50) NOT NULL,
  `fld_ownerslname` varchar(50) NOT NULL,
  `fld_ownershopname` varchar(50) NOT NULL,
  `fld_ownersbarangay` varchar(50) NOT NULL,
  `fld_ownerscaddress` varchar(50) NOT NULL,
  `fld_ownersemail` varchar(50) NOT NULL,
  `fld_ownerscnumber` varchar(50) NOT NULL,
  `fld_ownerspassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_ownersinfo`
--

INSERT INTO `tbl_ownersinfo` (`fld_ownersid`, `fld_ownersfname`, `fld_ownerslname`, `fld_ownershopname`, `fld_ownersbarangay`, `fld_ownerscaddress`, `fld_ownersemail`, `fld_ownerscnumber`, `fld_ownerspassword`) VALUES
(1, 'Juan', 'Dela Cruz', 'Auto Kleen', 'East Tapinac', '154 East tapinac olongapo City', 'Autokleen@gmail.com', '63912345678', 'Aa12345678'),
(2, 'Pedro', 'Penduko', 'Perfect Finish', 'East Tapinac ', '154 East Tapinac Olongapo City', 'Perfectfinish@gmail.com', '639507822972', 'Aa12345678'),
(3, 'Pedro', 'Batumbakal', 'RBC Car wash shop', 'East Tapinac', 'East tapinac rizal ave.', 'rbc@gmail.com', '63912345678', 'Aa1234567'),
(4, 'Migz', 'Atienza', 'Kanto Silog', 'Tabacuhan', '1405 Tabacuhan Sta.rita', 'kantosilog@gmail.com', '639155821385', 'asdasd123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shopinfo`
--

CREATE TABLE `tbl_shopinfo` (
  `fld_shoppersonelid` int(11) UNSIGNED NOT NULL,
  `fld_shoppic` varchar(50) NOT NULL,
  `fld_pfname` varchar(50) NOT NULL,
  `fld_plname` varchar(50) NOT NULL,
  `fld_pbday` varchar(50) NOT NULL,
  `fld_pcaddress` varchar(50) NOT NULL,
  `fld_pcnumber` varchar(50) NOT NULL,
  `fld_pphoto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_userreg`
--

CREATE TABLE `tbl_userreg` (
  `fld_id` int(11) UNSIGNED NOT NULL,
  `fld_firstname` varchar(50) NOT NULL,
  `fld_lastname` varchar(50) NOT NULL,
  `fld_barangay` varchar(50) NOT NULL,
  `fld_completeaddress` varchar(50) NOT NULL,
  `fld_landmark` varchar(50) NOT NULL,
  `fld_email` varchar(50) NOT NULL,
  `fld_contact` varchar(50) NOT NULL,
  `fld_password` varchar(50) NOT NULL,
  `fld_status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_userreg`
--

INSERT INTO `tbl_userreg` (`fld_id`, `fld_firstname`, `fld_lastname`, `fld_barangay`, `fld_completeaddress`, `fld_landmark`, `fld_email`, `fld_contact`, `fld_password`, `fld_status`) VALUES
(1, 'EJ', 'Faraon', 'East Bajac Bajac', '15c 27st East Bajac Bajac Olongapo City', 'Brangay Health Center', 'ejdarrellfaraon@gmail.com', '639507822972', 'Aa1234567', 'Activate'),
(2, 'darrell', 'Faraon', 'West Bajac Bajac', '15c 27st West Bajac Bajac Olongapo City', 'Brangay Health Center', 'darrellfaraon@gmail.com', '639507822972', 'Aa1234567', 'Deactivate'),
(3, 'Migz', 'Atienza', 'Sta.Rita', '1405 Tabacuhan', 'Kanto Silog', 'migzatienza01@gmail.com', '09155821385', 'asdasd123', 'Activate'),
(8, 'Sevena Haidee', 'Bello', 'Old Cabalan', '123 Apitong Ext.', 'Lugto Store', 'sevena@gmail.com', '09491419904', 'admin123', 'Activate');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_userstatusrequest`
--

CREATE TABLE `tbl_userstatusrequest` (
  `fld_ustid` int(11) UNSIGNED NOT NULL,
  `fld_ustshopname` varchar(50) NOT NULL,
  `fld_ustdate` varchar(50) NOT NULL,
  `fld_status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_userstatusrequest`
--

INSERT INTO `tbl_userstatusrequest` (`fld_ustid`, `fld_ustshopname`, `fld_ustdate`, `fld_status`) VALUES
(1, 'Auto Kleen', '2019-04-25', 'Accepted'),
(2, 'Perfect Finish', '2019-04-29', 'Pending'),
(3, 'RBC Car wash shop', '2011-04-01', 'Pending'),
(4, '', '', 'Pending'),
(5, 'Auto Kleen', '', 'Accepted'),
(6, 'Auto Kleen', '2019-04-04', 'Accepted'),
(7, 'Perfect Finish', '', 'Pending'),
(8, 'Auto Kleen', '2019-04-27', 'Accepted'),
(9, 'Kanto Silog', '2222-12-31', 'Pending'),
(10, 'Kanto Silog', '2222-12-31', 'Pending'),
(11, 'Kanto Silog', '2222-12-31', 'Pending'),
(12, 'Kanto Silog', '2222-12-31', 'Accepted'),
(13, 'Auto Kleen', '2019-05-01', 'Accepted'),
(14, 'Auto Kleen', '2019-04-30', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usertransaction`
--

CREATE TABLE `tbl_usertransaction` (
  `fld_utransacid` int(11) NOT NULL,
  `fld_utransactionemail` varchar(50) NOT NULL,
  `fld_utransactiondate` varchar(50) NOT NULL,
  `fld_utransactiontservice` varchar(50) NOT NULL,
  `fld_utransactionmessage` text NOT NULL,
  `fld_utransactshop` varchar(25) NOT NULL,
  `fld_utransactionaddress` varchar(100) NOT NULL,
  `fld_timesched` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_usertransaction`
--

INSERT INTO `tbl_usertransaction` (`fld_utransacid`, `fld_utransactionemail`, `fld_utransactiondate`, `fld_utransactiontservice`, `fld_utransactionmessage`, `fld_utransactshop`, `fld_utransactionaddress`, `fld_timesched`) VALUES
(1, 'ejdarrellfaraon@gmail.com', '2019-04-25', 'Body Wash', 'Help', 'Auto Kleen', '15c 27st East Bajac Bajac Olongapo City', '12:31'),
(2, 'ejdarrellfaraon@gmail.com', '2019-04-29', 'Vacuum', 'asdasd', 'Perfect Finish', '15c 27st East Bajac Bajac Olongapo City', '0'),
(3, 'migzatienza01@gmail.com', '2011-04-01', 'Engine Wash', 'SOlid', 'RBC Car wash shop', '1405 Tabacuhan', '0'),
(4, 'migzatienza01@gmail.com', '', 'Open this select menu', '', '', '1405 Tabacuhan', '0'),
(5, 'migzatienza01@gmail.com', '', 'Open this select menu', '', 'Auto Kleen', '1405 Tabacuhan', '13:12'),
(6, 'ejdarrellfaraon@gmail.com', '2019-04-04', 'Body Wash', 'ulul', 'Auto Kleen', '15c 27st East Bajac Bajac Olongapo City', '12:31'),
(7, 'ejdarrellfaraon@gmail.com', '', 'Body Wash', 'wae', 'Perfect Finish', '15c 27st East Bajac Bajac Olongapo City', '0'),
(8, 'sevena@gmail.com', '2019-04-27', 'Engine Wash', 'please', 'Auto Kleen', '123 Apitong Ext.', ''),
(9, 'migzatienza01@gmail.com', '2222-12-31', 'Body Wash', 'asdsasda', 'Kanto Silog', '1405 Tabacuhan', ''),
(10, 'migzatienza01@gmail.com', '2222-12-31', 'Body Wash', 'asdsasda', 'Kanto Silog', '1405 Tabacuhan', ''),
(11, 'migzatienza01@gmail.com', '2222-12-31', 'Body Wash', 'bopols', 'Kanto Silog', '1405 Tabacuhan', ''),
(12, 'migzatienza01@gmail.com', '2222-12-31', 'Engine Wash', 'bopolsa', 'Kanto Silog', '1405 Tabacuhan', '12:31'),
(13, 'ejdarrellfaraon@gmail.com', '2019-05-01', 'Vacuum', 'please', 'Auto Kleen', '15c 27st East Bajac Bajac Olongapo City', '00:31'),
(14, 'ejdarrellfaraon@gmail.com', '2019-04-30', 'Body Wash', 'please wash', 'Auto Kleen', '15c 27st East Bajac Bajac Olongapo City', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_ownersinfo`
--
ALTER TABLE `tbl_ownersinfo`
  ADD PRIMARY KEY (`fld_ownersid`);

--
-- Indexes for table `tbl_shopinfo`
--
ALTER TABLE `tbl_shopinfo`
  ADD PRIMARY KEY (`fld_shoppersonelid`);

--
-- Indexes for table `tbl_userreg`
--
ALTER TABLE `tbl_userreg`
  ADD PRIMARY KEY (`fld_id`);

--
-- Indexes for table `tbl_userstatusrequest`
--
ALTER TABLE `tbl_userstatusrequest`
  ADD PRIMARY KEY (`fld_ustid`);

--
-- Indexes for table `tbl_usertransaction`
--
ALTER TABLE `tbl_usertransaction`
  ADD PRIMARY KEY (`fld_utransacid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_ownersinfo`
--
ALTER TABLE `tbl_ownersinfo`
  MODIFY `fld_ownersid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_shopinfo`
--
ALTER TABLE `tbl_shopinfo`
  MODIFY `fld_shoppersonelid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_userreg`
--
ALTER TABLE `tbl_userreg`
  MODIFY `fld_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_userstatusrequest`
--
ALTER TABLE `tbl_userstatusrequest`
  MODIFY `fld_ustid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_usertransaction`
--
ALTER TABLE `tbl_usertransaction`
  MODIFY `fld_utransacid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
