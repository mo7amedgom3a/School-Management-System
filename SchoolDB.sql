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
-- Table structure for table `AspNetRoleClaims`
--

DROP TABLE IF EXISTS `AspNetRoleClaims`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetRoleClaims` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` varchar(95) NOT NULL,
  `ClaimType` longtext,
  `ClaimValue` longtext,
  PRIMARY KEY (`Id`),
  KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`),
  CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetRoleClaims`
--

LOCK TABLES `AspNetRoleClaims` WRITE;
/*!40000 ALTER TABLE `AspNetRoleClaims` DISABLE KEYS */;
/*!40000 ALTER TABLE `AspNetRoleClaims` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AspNetRoles`
--

DROP TABLE IF EXISTS `AspNetRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetRoles` (
  `Id` varchar(95) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` longtext,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `RoleNameIndex` (`NormalizedName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetRoles`
--

LOCK TABLES `AspNetRoles` WRITE;
/*!40000 ALTER TABLE `AspNetRoles` DISABLE KEYS */;
INSERT INTO `AspNetRoles` VALUES ('45cc086e-495c-49d2-ad01-5c2d70e607d4','Student','STUDENT',NULL),('871a4c75-3db3-4144-a93a-4279bb3c8382','Teacher','TEACHER',NULL),('e2d08361-ae1a-4aac-b86a-d0054d80dd06','Admin','ADMIN',NULL);
/*!40000 ALTER TABLE `AspNetRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AspNetUserClaims`
--

DROP TABLE IF EXISTS `AspNetUserClaims`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetUserClaims` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` varchar(95) NOT NULL,
  `ClaimType` longtext,
  `ClaimValue` longtext,
  PRIMARY KEY (`Id`),
  KEY `IX_AspNetUserClaims_UserId` (`UserId`),
  CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetUserClaims`
--

LOCK TABLES `AspNetUserClaims` WRITE;
/*!40000 ALTER TABLE `AspNetUserClaims` DISABLE KEYS */;
/*!40000 ALTER TABLE `AspNetUserClaims` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AspNetUserLogins`
--

DROP TABLE IF EXISTS `AspNetUserLogins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetUserLogins` (
  `LoginProvider` varchar(95) NOT NULL,
  `ProviderKey` varchar(95) NOT NULL,
  `ProviderDisplayName` longtext,
  `UserId` varchar(95) NOT NULL,
  PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  KEY `IX_AspNetUserLogins_UserId` (`UserId`),
  CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetUserLogins`
--

LOCK TABLES `AspNetUserLogins` WRITE;
/*!40000 ALTER TABLE `AspNetUserLogins` DISABLE KEYS */;
/*!40000 ALTER TABLE `AspNetUserLogins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AspNetUserRoles`
--

DROP TABLE IF EXISTS `AspNetUserRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetUserRoles` (
  `UserId` varchar(95) NOT NULL,
  `RoleId` varchar(95) NOT NULL,
  PRIMARY KEY (`UserId`,`RoleId`),
  KEY `IX_AspNetUserRoles_RoleId` (`RoleId`),
  CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetUserRoles`
--

LOCK TABLES `AspNetUserRoles` WRITE;
/*!40000 ALTER TABLE `AspNetUserRoles` DISABLE KEYS */;
INSERT INTO `AspNetUserRoles` VALUES ('0b3f65c5-af38-47eb-8c4c-42de6b9811e9','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('1edddd53-1902-411e-add0-6b109731dadd','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('5431d13f-9f89-4111-a42d-bbb43b2164d5','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('59c98a99-7978-4b69-8849-9ac6f5ee45d0','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('5cb683a0-5db3-4f17-a2d7-e7990f00a262','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('634c4996-e158-4410-b608-8b8831cd9ae6','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('7c08acee-4f8d-4b87-8594-3e7f2a6cbc6d','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('92eda0ce-2992-4228-80b2-3972c85dbb9d','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('ae759395-b260-4852-80ac-89cce9226edc','45cc086e-495c-49d2-ad01-5c2d70e607d4'),('1436c80d-811e-494e-a075-84d3f20a316e','871a4c75-3db3-4144-a93a-4279bb3c8382'),('4671dd6f-7db4-48f9-b4fa-6db164bec60b','871a4c75-3db3-4144-a93a-4279bb3c8382'),('92c110f1-cf80-4d3f-b05b-fd3894867390','871a4c75-3db3-4144-a93a-4279bb3c8382'),('b121e969-b643-46bd-ae8e-eaa3c360b247','871a4c75-3db3-4144-a93a-4279bb3c8382'),('b7e03522-9ff7-4f49-a89a-501f079e6b11','871a4c75-3db3-4144-a93a-4279bb3c8382'),('6ab70c98-42db-4a7f-8764-d45843393953','e2d08361-ae1a-4aac-b86a-d0054d80dd06');
/*!40000 ALTER TABLE `AspNetUserRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AspNetUserTokens`
--

DROP TABLE IF EXISTS `AspNetUserTokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetUserTokens` (
  `UserId` varchar(95) NOT NULL,
  `LoginProvider` varchar(95) NOT NULL,
  `Name` varchar(95) NOT NULL,
  `Value` longtext,
  PRIMARY KEY (`UserId`,`LoginProvider`,`Name`),
  CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetUserTokens`
--

LOCK TABLES `AspNetUserTokens` WRITE;
/*!40000 ALTER TABLE `AspNetUserTokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `AspNetUserTokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AspNetUsers`
--

DROP TABLE IF EXISTS `AspNetUsers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AspNetUsers` (
  `Id` varchar(95) NOT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `NormalizedUserName` varchar(256) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `NormalizedEmail` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext,
  `SecurityStamp` longtext,
  `ConcurrencyStamp` longtext,
  `PhoneNumber` longtext,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  KEY `EmailIndex` (`NormalizedEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AspNetUsers`
--

LOCK TABLES `AspNetUsers` WRITE;
/*!40000 ALTER TABLE `AspNetUsers` DISABLE KEYS */;
INSERT INTO `AspNetUsers` VALUES ('0b3f65c5-af38-47eb-8c4c-42de6b9811e9','dzsggfdshdf','DZSGGFDSHDF',NULL,NULL,0,'AQAAAAIAAYagAAAAEELwgvQfHjfrrWgOHjtDMBmPUoSSxvmj8lHKgOryTKOKWOmQFrGeXFKRr0IsDxSgSA==','POSGRQ5OUXH6SCHBUTT3QRZMKTE7LSYA','53879916-2bfc-4cf1-b369-5f8596545f53',NULL,0,0,NULL,1,0),('1436c80d-811e-494e-a075-84d3f20a316e','mohamed_gomaayjfj','MOHAMED_GOMAAYJFJ',NULL,NULL,0,'AQAAAAIAAYagAAAAEGkkIDylBmxhbDQNfJx/62Y0r04OSrUL7t7iRGOwLRlvE4khbkopiAZEzirkk1g9gw==','JDHALUFU62RKXCQETGVIUKSIAAHCKIKP','c4e98ce9-ca57-4c57-8931-06933fad4d87',NULL,0,0,NULL,1,0),('1edddd53-1902-411e-add0-6b109731dadd','mohamed','MOHAMED',NULL,NULL,0,'AQAAAAIAAYagAAAAELjC6aLPdeWn1YMZv2PJFDr4RERHePYaB0tD7BUCMeNa+Ou+mSUIs5UlQ0W27q3cDQ==','3SQZII63TZHUUG2SPCXSEMREF3IKKDHD','56c8e718-491b-414a-a09a-288ab566b6e0',NULL,0,0,NULL,1,0),('4671dd6f-7db4-48f9-b4fa-6db164bec60b','mohamed_gomaa123488','MOHAMED_GOMAA123488',NULL,NULL,0,'AQAAAAIAAYagAAAAEOP0x4jXzRDuGvA3/QrdY/P5c0igFM2SjIHsnGJTGTEHIOmpSOYZNEGOEuBGMLVsUg==','XSXDSGUKHHXEYY2BUTJKIWKS4NJVC3HB','f2dfbfc5-fd84-4532-9785-e14ce9e540f3',NULL,0,0,NULL,1,0),('5431d13f-9f89-4111-a42d-bbb43b2164d5','dfhjg','DFHJG',NULL,NULL,0,'AQAAAAIAAYagAAAAEKlm60dqYLusLTWfdcoCea6pAyS8NPpIgVClK65a3VGJDA+wK57e1HZhiAhIospzYg==','2ZQ55SMJME5QOJ6USPUC4LMLIU2V6YXP','6f1061f7-f974-43c3-ae8c-155437a774cb',NULL,0,0,NULL,1,0),('59c98a99-7978-4b69-8849-9ac6f5ee45d0','gjclujhc','GJCLUJHC',NULL,NULL,0,'AQAAAAIAAYagAAAAEDDRvr5jQgagyMCJwLfthPO5XSG2K66utJmBI4MiKQpGsCtawhtPN8EIJJ+lJMOKRA==','T6AMNUCDEHZ2KAJSM43BS6YGUXK34WNS','ab2e3704-3b26-40d4-8320-eef45e40216b',NULL,0,0,NULL,1,0),('5cb683a0-5db3-4f17-a2d7-e7990f00a262','sfhbjfzsdhfbdskjbhkjs','SFHBJFZSDHFBDSKJBHKJS',NULL,NULL,0,'AQAAAAIAAYagAAAAENQgeOFjcgc8iURJcU1z6gFn9781FsbHlSDu97Nfnp4PvBE5nRTqD73QhtAiBr80nA==','WE6LYDSRH2DSK7R6V54QWJ63UAQTNUS7','8f816909-cdbc-496b-906f-f21a80321644',NULL,0,0,NULL,1,0),('634c4996-e158-4410-b608-8b8831cd9ae6','MohamedGomaa123','MOHAMEDGOMAA123',NULL,NULL,0,'AQAAAAIAAYagAAAAELENZyaZF0OZQHXoqk26pBfDFsSmTdNQon6+lul2u8vW9z/39J14ZkQv1qKEUTXNlQ==','ZOHZYZOYNY7XRDSWK2V62FEV53RUF7VF','cd4f1931-76ee-4ae5-975c-5b13f622e70b',NULL,0,0,NULL,1,0),('6ab70c98-42db-4a7f-8764-d45843393953','MohamedGom3a','MOHAMEDGOM3A',NULL,NULL,0,'AQAAAAIAAYagAAAAENEKs/E/a09JH7kcUkCLB12SQBpfTsuirGBNkJdQKnIDe9FaJF6qL8GmHL86PqPa+g==','C2YXXB2E3TGKRMR3VNBEPDJD2DZQO2DF','1ec695f7-6e9e-4012-b3e4-956e2cf47da9',NULL,0,0,NULL,1,0),('7c08acee-4f8d-4b87-8594-3e7f2a6cbc6d','mazen','MAZEN',NULL,NULL,0,'AQAAAAIAAYagAAAAEGgxQEN5kj05sVJFzFOqABT0qSW25xVO9M7Ipd6eANkTa67dK0i8jqOOeixy87Wu0A==','M73QH4F7F2YN2I2GEMHCXJKWLB5AB5DT','7d5cb008-afd6-4bda-8ca5-dae8d4a06898',NULL,0,0,NULL,1,0),('92c110f1-cf80-4d3f-b05b-fd3894867390','mohamed_gomaargd','MOHAMED_GOMAARGD',NULL,NULL,0,'AQAAAAIAAYagAAAAEK7MjP6y4Ay+gcv987OLnjPrD53+YzGwyuLQx1kte649l9arO/73Jv1aqANt3+qmrg==','DCGYT56EGCVBOKWKBEXVTDJHABZHLVSQ','8e8b6e95-2096-4bdb-93f0-f0c7606790dc',NULL,0,0,NULL,1,0),('92eda0ce-2992-4228-80b2-3972c85dbb9d','adelazizalkzaz@gmail.com','ADELAZIZALKZAZ@GMAIL.COM',NULL,NULL,0,'AQAAAAIAAYagAAAAEIRn2va2yh7r6jvURF6n6PzYdhdbxZ1YKLcsub5sNvK4yaNHmCWbkfqTb+TP9r0kWA==','QE6TDW7JAPVIZGL6FPM62HC37QREZKOT','321696ea-17b2-4a69-831d-fef74bed3415',NULL,0,0,NULL,1,0),('a8b540a7-ade2-44d2-80db-48e19243871e','mohamedGomaa','MOHAMEDGOMAA',NULL,NULL,0,'AQAAAAIAAYagAAAAEDyVXDyTxu50+TBKoroZ4tU8scnZFtEfL6lEq3KsfP7CrV5dxj3eR1n4orjV5i9UOg==','3CMI75PM6RSBUAUJFSQBWKZEAFDBTSMF','bbea2bed-29cd-419e-b819-4b32730e850a',NULL,0,0,NULL,1,0),('ae759395-b260-4852-80ac-89cce9226edc','rrshytj','RRSHYTJ',NULL,NULL,0,'AQAAAAIAAYagAAAAEH3GDArNAJIPE8YHd7PJfIyVflwBfLSRpgzBrexP6GMI2x3iWY1EHborTApkJKlNeA==','XXQTVI7GNTM6P5TTRB7CNPS7LWVJQQZB','e037c043-8617-4161-87cd-78512fa892d4',NULL,0,0,NULL,1,0),('b121e969-b643-46bd-ae8e-eaa3c360b247','mohamedBaker123','MOHAMEDBAKER123',NULL,NULL,0,'AQAAAAIAAYagAAAAEKfqW9N1mHj33dv5Bgcd+/0Vey17MzoUNlyqUFs+0OS4QMUCjROUFaNRt2/EmDh4oQ==','7VV77LB3OMITKK5SCTKC7TOMCX5CGCGA','41b1bf31-d2f9-416c-83fd-2bc1b1fbe84c',NULL,0,0,NULL,1,0),('b5f93ad4-8c1c-461f-a70d-2da7c197b58f','AliGomaa','ALIGOMAA',NULL,NULL,0,'AQAAAAIAAYagAAAAEOYcyA1CZMiP6r7HGz/bysWy8B/8LVuvXWjleL1/OwsE+zscpLklgcZ9hkFta8MVmw==','O72VPAYJHQKBWEZUQC2TYGWIFN7Y5OTR','e686df0f-2ced-4ba9-81dc-e9853a927654',NULL,0,0,NULL,1,0),('b7e03522-9ff7-4f49-a89a-501f079e6b11','mohamed_gomaaufthf','MOHAMED_GOMAAUFTHF',NULL,NULL,0,'AQAAAAIAAYagAAAAENPinTXfxzG45HY0ywDSboOMUMnsIIQevkSWPoazLQ83fpdaLVhEueCPFQzk1O7dxw==','N3X5HAQZ3VCS562IKDCZUFXP2FCYYXTL','b7f72bad-d089-4a4c-965b-cac64500860f',NULL,0,0,NULL,1,0),('e9679a7e-a20e-45f1-b9f6-07e5b1c93567','mohameGomaa','MOHAMEGOMAA',NULL,NULL,0,'AQAAAAIAAYagAAAAEAPHJ9lkIpukzcxSkviAR9uiqtkDelZBcKRYrRn2g7JeXqP5FuXvZ90kqV+JiyRjHA==','2EPWLAR7W4MPFU7BNAPEPR5VGER4RRE3','cd027a0d-4e5e-40af-9c21-92e521a0ebfa',NULL,0,0,NULL,1,0);
/*!40000 ALTER TABLE `AspNetUsers` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendances`
--

LOCK TABLES `Attendances` WRITE;
/*!40000 ALTER TABLE `Attendances` DISABLE KEYS */;
INSERT INTO `Attendances` VALUES (1,'2024-06-19 18:42:58',2,1,1),(2,'2024-06-20 09:50:26',3,1,1),(3,'2024-06-20 10:11:47',2,1,1),(4,'2024-06-20 12:57:56',2,1,1),(9,'2024-07-01 05:25:06',0,1,1),(10,'2024-07-01 05:25:20',0,2,0),(15,'2024-07-01 21:05:53',2,1,0),(16,'2024-07-01 21:06:10',2,1,1),(17,'2024-07-02 03:43:21',10,3,1),(18,'2024-07-04 16:52:44',41,4,1),(19,'2024-07-04 20:28:16',41,4,1),(20,'2024-07-04 23:11:47',41,4,0),(21,'2024-07-05 00:08:42',41,4,1),(22,'2024-07-05 00:08:46',41,4,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES (1,'Data Structure and Algorithm',1,1),(2,'OS',1,1),(3,'DataBase',1,1),(4,'Calculus ',1,3),(5,'networking',2,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'CS'),(2,'IT');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exams`
--

LOCK TABLES `Exams` WRITE;
/*!40000 ALTER TABLE `Exams` DISABLE KEYS */;
INSERT INTO `Exams` VALUES (1,'EX1','not finished',25,'2024-06-19 18:19:43','13:00:00',1,1),(2,'midterm','pinding',25,'2024-07-01 23:53:45','13:00:00',1,1),(3,'midterm','pinding',25,'2024-07-01 23:53:45','13:00:00',1,1),(4,'midterm','pinding',25,'2024-07-01 23:53:45','13:00:00',1,1),(6,'summer','pinding',20,'2024-07-15 00:00:00','13:00:00',3,1),(7,'midterm','finish ',26,'2024-07-22 00:00:00','19:00:00',4,3);
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
  `TeacherId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Homeworks_CourseId` (`CourseId`),
  KEY `IX_Homeworks_TeacherId` (`TeacherId`),
  CONSTRAINT `FK_Homeworks_Courses_CourseId` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Homeworks_Teachers_TeacherId` FOREIGN KEY (`TeacherId`) REFERENCES `Teachers` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homeworks`
--

LOCK TABLES `Homeworks` WRITE;
/*!40000 ALTER TABLE `Homeworks` DISABLE KEYS */;
INSERT INTO `Homeworks` VALUES (1,'data Structure homework','solve the 10 problem  in data structure','2024-06-19 17:54:06',1,1),(2,'data base homework','solve 20 quary','2024-07-01 05:45:23',1,3),(4,'os homwork','build kernel ','2024-07-22 09:51:00',1,3),(5,'calaculas','solve 30 integration','0001-01-29 00:00:00',0,4);
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
INSERT INTO `StudentCourses` VALUES (2,1,0,84),(2,2,100,80),(2,3,100,77),(3,1,100,90),(3,2,0,88),(10,1,100,90),(10,2,100,80),(41,2,100,0),(41,4,100,51);
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
  `FileUrl` varchar(255) DEFAULT NULL,
  `SubmitDate` datetime NOT NULL,
  `Status` longtext NOT NULL,
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
INSERT INTO `StudentHomeworks` VALUES (2,1,'/Uploads/8147e5bc-5ee3-4ccf-9570-91b03b024b76.png','0001-01-01 00:00:00','Submited'),(2,4,'/Uploads/0a167dec-9825-4eee-9690-578d675993c3.PNG','2024-07-01 23:19:48','Submited'),(41,5,'/Uploads/e3fe6871-e2fb-4df9-9eec-7272f6f6320e.PNG','2024-07-04 23:51:46','Submitted');
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
  `UserId` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Students_DeptId` (`DeptId`),
  CONSTRAINT `FK_Students_Departments_DeptId` FOREIGN KEY (`DeptId`) REFERENCES `Departments` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (2,'mohamed','gomaa','male','2024-06-19 02:51:50','Egypt','mm.png',1,'third year',''),(3,'Ahmed','gomaa','male','2024-06-20 09:25:22','Assuit','m.png',1,'first year',''),(10,'Mohamed','mazen','male','2024-06-22 22:13:24','Egypt','mm.png',1,'first','634c4996-e158-4410-b608-8b8831cd9ae6'),(41,'adel','awad','male','2015-07-03 00:00:00','Assuit','dkjc',1,'','92eda0ce-2992-4228-80b2-3972c85dbb9d');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teachers`
--

LOCK TABLES `Teachers` WRITE;
/*!40000 ALTER TABLE `Teachers` DISABLE KEYS */;
INSERT INTO `Teachers` VALUES (1,'CS',1,'mohamed','gomaa','male','2024-06-19 12:12:55','Egypt','mm.png','0001-01-01 00:00:00','b7e03522-9ff7-4f49-a89a-501f079e6b11'),(3,'mathematics',1,'Mohamed','abo baker','male','2024-07-01 00:00:00','Assuit','dkjc','0001-01-01 00:00:00','b121e969-b643-46bd-ae8e-eaa3c360b247');
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

-- Dump completed on 2024-07-06  9:24:01
