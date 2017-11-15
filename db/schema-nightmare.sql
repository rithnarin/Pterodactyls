-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Follows'
-- 
-- ---

DROP TABLE IF EXISTS `Follows`;
    
CREATE TABLE `Follows` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users1` INTEGER NOT NULL DEFAULT NULL,
  `id_users2` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Favorites'
-- 
-- ---

DROP TABLE IF EXISTS `Favorites`;
    
CREATE TABLE `Favorites` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_posts` INTEGER NULL DEFAULT NULL,
  `id_users` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Likes'
-- 
-- ---

DROP TABLE IF EXISTS `Likes`;
    
CREATE TABLE `Likes` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_posts` INTEGER NOT NULL DEFAULT NULL,
  `id_users` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Tags'
-- 
-- ---

DROP TABLE IF EXISTS `Tags`;
    
CREATE TABLE `Tags` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `tag` VARCHAR(25) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Tags_Posts'
-- 
-- ---

DROP TABLE IF EXISTS `Tags_Posts`;
    
CREATE TABLE `Tags_Posts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_tags` INTEGER NOT NULL DEFAULT NULL,
  `id_posts` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

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
  `views` INTEGER NOT NULL DEFAULT 0,
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

ALTER TABLE `Follows` ADD FOREIGN KEY (id_users1) REFERENCES `Users` (`id`);
ALTER TABLE `Follows` ADD FOREIGN KEY (id_users2) REFERENCES `Users` (`id`);
ALTER TABLE `Favorites` ADD FOREIGN KEY (id_posts) REFERENCES `Posts` (`id`);
ALTER TABLE `Favorites` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
ALTER TABLE `Likes` ADD FOREIGN KEY (id_posts) REFERENCES `Posts` (`id`);
ALTER TABLE `Likes` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
ALTER TABLE `Tags_Posts` ADD FOREIGN KEY (id_tags) REFERENCES `Tags` (`id`);
ALTER TABLE `Tags_Posts` ADD FOREIGN KEY (id_posts) REFERENCES `Posts` (`id`);
ALTER TABLE `Posts` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);
ALTER TABLE `Posts` ADD FOREIGN KEY (id_locations) REFERENCES `Locations` (`id`);
ALTER TABLE `Sessions` ADD FOREIGN KEY (id_users) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Follows` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Favorites` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Likes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Tags` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Tags_Posts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Posts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Sessions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Follows` (`id`,`id_users1`,`id_users2`) VALUES
-- ('','','');
-- INSERT INTO `Favorites` (`id`,`id_posts`,`id_users`) VALUES
-- ('','','');
-- INSERT INTO `Likes` (`id`,`id_posts`,`id_users`) VALUES
-- ('','','');
-- INSERT INTO `Tags` (`id`,`tag`) VALUES
-- ('','');
-- INSERT INTO `Tags_Posts` (`id`,`id_tags`,`id_posts`) VALUES
-- ('','','');
-- INSERT INTO `Posts` (`id`,`id_users`,`title`,`subtitle`,`pics`,`id_mongo_text`,`id_locations`,`views`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Locations` (`id`,`location`) VALUES
-- ('','');
-- INSERT INTO `Users` (`id`,`username`,`email`,`about_me`,`pic`) VALUES
-- ('','','','','');
-- INSERT INTO `Sessions` (`id`,`id_users`,`hash`) VALUES
-- ('','','');