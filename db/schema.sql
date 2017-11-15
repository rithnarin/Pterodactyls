-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Posts'
-- 
-- ---

DROP TABLE IF EXISTS `Posts`;
    
CREATE TABLE `Posts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `title` VARCHAR(50) NOT NULL DEFAULT '''',
  `subtitle` VARCHAR(75) NOT NULL DEFAULT '''',
  `pics` VARCHAR(255) NULL,
  `id_mongo_text` INTEGER NULL DEFAULT NULL,
  `id_locations` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Locations'
-- 
-- ---

DROP TABLE IF EXISTS `Locations`;
    
CREATE TABLE `Locations` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `location` VARCHAR(50) NULL DEFAULT '''',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(25) NOT NULL DEFAULT '''',
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `about_me` VARCHAR(250) NULL DEFAULT NULL,
  `pic` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Sessions'
-- 
-- ---

DROP TABLE IF EXISTS `Sessions`;
    
CREATE TABLE `Sessions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users` INTEGER NOT NULL DEFAULT NULL,
  `hash` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Posts` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
ALTER TABLE `Posts` ADD FOREIGN KEY (id_locations) REFERENCES `Locations` (`id`);
ALTER TABLE `Sessions` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);

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