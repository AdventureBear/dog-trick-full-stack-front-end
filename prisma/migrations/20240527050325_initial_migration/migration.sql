-- CreateTable
CREATE TABLE `Trick` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `category` ENUM('Basic', 'Acting', 'Communication', 'Agility', 'Scent_Work', 'Affection', 'Self_Control', 'Utility', 'Cute_Tricks') NOT NULL,

    UNIQUE INDEX `Trick_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
