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
-- Table structure for table `tbl_prog`
--

DROP TABLE IF EXISTS `tbl_prog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_prog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idgenerado` varchar(50) DEFAULT NULL,
  `fecha_prog` varchar(30) DEFAULT NULL,
  `nu_transporte` varchar(15) DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  `hora_despacho` varchar(10) DEFAULT NULL,
  `hora_termino` varchar(10) DEFAULT NULL,
  `tiempo_delivery` varchar(10) DEFAULT NULL,
  `jornada_laboral` varchar(10) DEFAULT NULL,
  `paradas` int DEFAULT NULL,
  `clientes` int DEFAULT NULL,
  `distancia` decimal(18,2) DEFAULT NULL,
  `peso` decimal(18,2) DEFAULT NULL,
  `volumen` decimal(18,2) DEFAULT NULL,
  `ventas` decimal(18,2) DEFAULT NULL,
  `flete_rsw` decimal(18,2) DEFAULT NULL,
  `violaciones` varchar(100) DEFAULT NULL,
  `tipo_camion` varchar(200) DEFAULT NULL,
  `localidades_despacho` varchar(200) DEFAULT NULL,
  `registrado_por` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `actualizado_el` datetime DEFAULT NULL,
  `actualizado_por` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `eliminado_el` datetime DEFAULT NULL,
  `eliminado_por` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado` int DEFAULT '0',
  `eliminado` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idgenerado` (`idgenerado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_prog`
--

LOCK TABLES `tbl_prog` WRITE;
/*!40000 ALTER TABLE `tbl_prog` DISABLE KEYS */;
INSERT INTO `tbl_prog` VALUES (1,'1647290114315V4j739','2022/03/14','5555555','V4j739','07:00','15:00','0','0',50,60,240.00,2350.80,2900.00,22450.90,500.00,'','ABA','T4ujillo',NULL,NULL,NULL,NULL,NULL,0,0),(2,'1647295091686Z7A880','2022/03/14','4444444','Z7A880','07.00','16.00','12','9',60,80,110.00,1500.00,1700.00,5000.00,400.00,'0','BIC','P',NULL,NULL,NULL,NULL,NULL,0,0);
/*!40000 ALTER TABLE `tbl_prog` ENABLE KEYS */;
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
