-- MySQL dump 10.13  Distrib 5.7.42, for Linux (x86_64)
--
-- Host: localhost    Database: SchoolDB
-- ------------------------------------------------------
-- Server version	5.7.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Attendances`
--

DROP TABLE IF EXISTS `Attendances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attendances` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` datetime NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Attendances_CourseId` (`CourseId`),
  KEY `IX_Attendances_StudentId` (`StudentId`),
  CONSTRAINT `FK_Attendances_Courses_CourseId` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Attendances_Students_StudentId` FOREIGN KEY (`StudentId`) REFERENCES `Students` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendances`
--

LOCK TABLES `Attendances` WRITE;
/*!40000 ALTER TABLE `Attendances` DISABLE KEYS */;
INSERT INTO `Attendances` VALUES (1,'2024-06-19 18:42:58',2,1,1),(2,'2024-06-20 09:50:26',3,1,1),(3,'2024-06-20 10:11:47',2,1,1),(4,'2024-06-20 12:57:56',2,1,1);
/*!40000 ALTER TABLE `Attendances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Courses`
--

DROP TABLE IF EXISTS `Courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Courses` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `DeptId` int(11) NOT NULL,
  `TeacherId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Courses_DeptId` (`DeptId`),
  KEY `FK_Courses_Teachers_TeacherId` (`TeacherId`),
  CONSTRAINT `Courses_ibfk_1` FOREIGN KEY (`TeacherId`) REFERENCES `Teachers` (`Id`),
  CONSTRAINT `FK_Courses_Departments_DeptId` FOREIGN KEY (`DeptId`) REFERENCES `Departments` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES (1,'Data Structure and Algorithm',1,NULL);
/*!40000 ALTER TABLE `Courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departments`
--

DROP TABLE IF EXISTS `Departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departments` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'CS');
/*!40000 ALTER TABLE `Departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exams`
--

DROP TABLE IF EXISTS `Exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Exams` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) NOT NULL,
  `Status` longtext NOT NULL,
  `MaxMark` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Time` time NOT NULL,
  `CourseId` int(11) NOT NULL,
  `TeacherId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Exams_CourseId` (`CourseId`),
  KEY `IX_Exams_TeacherId` (`TeacherId`),
  CONSTRAINT `FK_Exams_Courses_CourseId` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Exams_Teachers_TeacherId` FOREIGN KEY (`TeacherId`) REFERENCES `Teachers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exams`
--

LOCK TABLES `Exams` WRITE;
/*!40000 ALTER TABLE `Exams` DISABLE KEYS */;
INSERT INTO `Exams` VALUES (1,'EX1','not finished',25,'2024-06-19 18:19:43','13:00:00',1,1);
/*!40000 ALTER TABLE `Exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Homeworks`
--

DROP TABLE IF EXISTS `Homeworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Homeworks` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) NOT NULL,
  `Description` text NOT NULL,
  `DueDate` datetime NOT NULL,
  `FileUrl` varchar(255) NOT NULL,
  `TeacherId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Homeworks_CourseId` (`CourseId`),
  KEY `IX_Homeworks_TeacherId` (`TeacherId`),
  CONSTRAINT `FK_Homeworks_Courses_CourseId` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Homeworks_Teachers_TeacherId` FOREIGN KEY (`TeacherId`) REFERENCES `Teachers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homeworks`
--

LOCK TABLES `Homeworks` WRITE;
/*!40000 ALTER TABLE `Homeworks` DISABLE KEYS */;
INSERT INTO `Homeworks` VALUES (1,'data Structure homework','solve the 10 problem  in data structure','2024-06-19 17:54:06','path/dd.pdf',1,1);
/*!40000 ALTER TABLE `Homeworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Salaries`
--

DROP TABLE IF EXISTS `Salaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Salaries` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `TeacherId` int(11) NOT NULL,
  `Amount` decimal(65,30) NOT NULL,
  `Date` datetime NOT NULL,
  `PaymentStatus` longtext NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Salaries_TeacherId` (`TeacherId`),
  CONSTRAINT `FK_Salaries_Teachers_TeacherId` FOREIGN KEY (`TeacherId`) REFERENCES `Teachers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Salaries`
--

LOCK TABLES `Salaries` WRITE;
/*!40000 ALTER TABLE `Salaries` DISABLE KEYS */;
INSERT INTO `Salaries` VALUES (3,1,6000.000000000000000000000000000000,'0001-01-01 00:00:00','done');
/*!40000 ALTER TABLE `Salaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudentCourses`
--

DROP TABLE IF EXISTS `StudentCourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudentCourses` (
  `StudentId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  `FullMark` int(11) NOT NULL DEFAULT '0',
  `StudentMark` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`StudentId`,`CourseId`),
  KEY `IX_StudentCourses_CourseId` (`CourseId`),
  CONSTRAINT `FK_StudentCourses_Courses_CourseId` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_StudentCourses_Students_StudentId` FOREIGN KEY (`StudentId`) REFERENCES `Students` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentCourses`
--

LOCK TABLES `StudentCourses` WRITE;
/*!40000 ALTER TABLE `StudentCourses` DISABLE KEYS */;
INSERT INTO `StudentCourses` VALUES (2,1,0,88);
/*!40000 ALTER TABLE `StudentCourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudentHomeworks`
--

DROP TABLE IF EXISTS `StudentHomeworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StudentHomeworks` (
  `StudentId` int(11) NOT NULL,
  `HomeworkId` int(11) NOT NULL,
  `SubmitDate` datetime NOT NULL,
  `Status` longtext NOT NULL,
  `Id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`StudentId`,`HomeworkId`),
  KEY `IX_StudentHomeworks_HomeworkId` (`HomeworkId`),
  CONSTRAINT `FK_StudentHomeworks_Homeworks_HomeworkId` FOREIGN KEY (`HomeworkId`) REFERENCES `Homeworks` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_StudentHomeworks_Students_StudentId` FOREIGN KEY (`StudentId`) REFERENCES `Students` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentHomeworks`
--

LOCK TABLES `StudentHomeworks` WRITE;
/*!40000 ALTER TABLE `StudentHomeworks` DISABLE KEYS */;
INSERT INTO `StudentHomeworks` VALUES (2,1,'2024-06-19 20:00:53','submited',1);
/*!40000 ALTER TABLE `StudentHomeworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Students` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `BirthDate` datetime NOT NULL,
  `Address` varchar(255) NOT NULL,
  `ImgUrl` varchar(255) NOT NULL,
  `DeptId` int(11) NOT NULL,
  `CurrentYear` longtext NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Students_DeptId` (`DeptId`),
  CONSTRAINT `FK_Students_Departments_DeptId` FOREIGN KEY (`DeptId`) REFERENCES `Departments` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (2,'mohamed','gomaa','male','2024-06-19 02:51:50','Egypt','mm.png',1,'third year'),(3,'Ahmed','gomaa','male','2024-06-20 09:25:22','Assuit','m.png',1,'first year');
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teachers`
--

DROP TABLE IF EXISTS `Teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Teachers` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Specialization` varchar(100) NOT NULL,
  `DeptId` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `Gender` longtext NOT NULL,
  `BirthDate` datetime NOT NULL,
  `Address` longtext NOT NULL,
  `ImgUrl` longtext NOT NULL,
  `EnrollDate` datetime NOT NULL DEFAULT '0001-01-01 00:00:00',
  `UserId` varchar(95) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`),
  KEY `IX_Teachers_DeptId` (`DeptId`),
  CONSTRAINT `FK_Teachers_Departments_DeptId` FOREIGN KEY (`DeptId`) REFERENCES `Departments` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teachers`
--

LOCK TABLES `Teachers` WRITE;
/*!40000 ALTER TABLE `Teachers` DISABLE KEYS */;
INSERT INTO `Teachers` VALUES (1,'CS',1,'mohamed','gomaa','male','2024-06-19 12:12:55','Egypt','mm.png','0001-01-01 00:00:00','');
/*!40000 ALTER TABLE `Teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `__EFMigrationsHistory`
--

DROP TABLE IF EXISTS `__EFMigrationsHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `__EFMigrationsHistory`
--

LOCK TABLES `__EFMigrationsHistory` WRITE;
/*!40000 ALTER TABLE `__EFMigrationsHistory` DISABLE KEYS */;
INSERT INTO `__EFMigrationsHistory` VALUES ('20240615234514_InitialCreate','8.0.6'),('20240619031557_modifieGradeTable','8.0.6'),('20240619194600_updateStudentHomework','8.0.6'),('20240620055903_addSalaryTableAndUpdateStudent','8.0.6'),('20240620061134_SalaryStatus','8.0.6'),('20240620063927_updateAttendence','8.0.6'),('20240620064422_updateAttendence2','8.0.6'),('20240621151528_AddIdentity','8.0.6'),('20240621152413_AddAuth','8.0.6'),('20240621163501_auth2','8.0.6'),('20240621164753_auth3','8.0.6'),('20240621174641_IdentitySchema','8.0.6'),('20240621174955_AddIdentity22','8.0.6');
/*!40000 ALTER TABLE `__EFMigrationsHistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-22  2:28:09
