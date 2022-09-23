-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: apal
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_liqui`
--

DROP TABLE IF EXISTS `tbl_liqui`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_liqui` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idprog` varchar(50) DEFAULT NULL,
  `fecha_liqui` varchar(30) DEFAULT NULL,
  `nu_transporte` varchar(15) DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  `conductor` varchar(200) DEFAULT NULL,
  `cobranza_prog_cigv` decimal(18,2) DEFAULT NULL,
  `cobranza_prog_sigv` decimal(18,2) DEFAULT NULL,
  `cantidad_1` int DEFAULT NULL,
  `soles_1` decimal(18,2) DEFAULT NULL,
  `cantidad_2` int DEFAULT NULL,
  `soles_2` decimal(18,2) DEFAULT NULL,
  `total` decimal(18,2) DEFAULT NULL,
  `suma_soles` decimal(18,2) DEFAULT NULL,
  `total_liq_sigv` decimal(18,2) DEFAULT NULL,
  `registrado_por` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `actualizado_el` datetime DEFAULT NULL,
  `actualizado_por` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `eliminado_el` datetime DEFAULT NULL,
  `eliminado_por` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado` int DEFAULT '0',
  `eliminado` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_liqui`
--

LOCK TABLES `tbl_liqui` WRITE;
/*!40000 ALTER TABLE `tbl_liqui` DISABLE KEYS */;
INSERT INTO `tbl_liqui` VALUES (1,'1647290114315V4j739','2022/03/14','5555555','V4j739','J.P',22900.10,22450.90,5,500.00,10,1000.00,15.00,1500.00,22700.00,NULL,NULL,NULL,NULL,NULL,0,0),(2,'1647295091686Z7A880','2022/03/14','4444444','Z7A880','RR',5500.00,5000.00,10,500.00,10,500.00,20.00,1000.00,4000.00,NULL,NULL,NULL,NULL,NULL,0,0);
/*!40000 ALTER TABLE `tbl_liqui` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-15 13:21:22
