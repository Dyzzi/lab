CREATE TABLE `pre`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `display_name` VARCHAR(45) NOT NULL,
  `handle` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NULL,
  `bio` VARCHAR(80) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `handle_UNIQUE` (`handle` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
