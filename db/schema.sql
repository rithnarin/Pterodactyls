-- execute this file (on pairing station) by running:
--       mysql -u student < db/schema.sql
-- on your machine, replace 'student' with your own username
-- created npm script for this


DROP DATABASE IF EXISTS kuyikSQL;

CREATE DATABASE kuyikSQL;

USE kuyikSQL;

-- -- ---
-- -- Globals
-- -- ---

-- -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- -- SET FOREIGN_KEY_CHECKS=0;

<<<<<<< HEAD
-- ---
-- Table 'Posts'
--
-- ---

DROP TABLE IF EXISTS `Posts`;

CREATE TABLE `Posts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_users` INTEGER NULL,
  `title` VARCHAR(255) NOT NULL DEFAULT '''',
  `subtitle` VARCHAR(255) NOT NULL DEFAULT '''',
  `pics` VARCHAR(255) NULL,
  `id_mongo_text` VARCHAR(255) NULL UNIQUE DEFAULT NULL,
  `id_locations` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Locations'
--
-- ---

DROP TABLE IF EXISTS `Locations`;

CREATE TABLE `Locations` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(255) NULL UNIQUE DEFAULT '''',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL UNIQUE DEFAULT '''',
  `email` VARCHAR(255) NULL UNIQUE DEFAULT NULL,
  `about_me` VARCHAR(510) NULL DEFAULT NULL,
  `pic` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Sessions'
--
-- ---

DROP TABLE IF EXISTS `Sessions`;

CREATE TABLE `Sessions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_users` INTEGER NOT NULL,
  `hash` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Posts` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
ALTER TABLE `Posts` ADD FOREIGN KEY (id_locations) REFERENCES `Locations` (`id`);
ALTER TABLE `Sessions` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
=======
-- -- ---
-- -- Table 'Posts'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Posts`;
    
-- CREATE TABLE `Posts` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `id_users` INTEGER NULL,
--   `title` VARCHAR(255) NOT NULL DEFAULT '''',
--   `subtitle` VARCHAR(255) NOT NULL DEFAULT '''',
--   `pics` VARCHAR(255) NULL,
--   `id_mongo_text` VARCHAR(255) NULL UNIQUE DEFAULT NULL,
--   `id_locations` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Locations'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Locations`;
    
-- CREATE TABLE `Locations` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `location` VARCHAR(255) NULL UNIQUE DEFAULT '''',
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Users'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Users`;
    
-- CREATE TABLE `Users` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `username` VARCHAR(255) NOT NULL UNIQUE DEFAULT '''',
--   `email` VARCHAR(255) NULL UNIQUE DEFAULT NULL,
--   `about_me` VARCHAR(510) NULL DEFAULT NULL,
--   `pic` VARCHAR(255) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Sessions'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Sessions`;
    
-- CREATE TABLE `Sessions` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `id_users` INTEGER NOT NULL,
--   `hash` VARCHAR(255) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys 
-- -- ---

-- ALTER TABLE `Posts` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
-- ALTER TABLE `Posts` ADD FOREIGN KEY (id_locations) REFERENCES `Locations` (`id`);
-- ALTER TABLE `Sessions` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
>>>>>>> 47a3cb04e66fb3f2bca653ebea629c567edaf2db

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Posts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Sessions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Posts` (`id`,`id_users`,`title`,`subtitle`,`pics`,`id_mongo_text`,`id_locations`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Locations` (`id`,`location`) VALUES
-- ('','');
-- INSERT INTO `Users` (`id`,`username`,`email`,`about_me`,`pic`) VALUES
-- ('','','','','');
-- INSERT INTO `Sessions` (`id`,`id_users`,`hash`) VALUES
-- ('','','');
