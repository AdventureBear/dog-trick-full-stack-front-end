/*
  Warnings:

  - The values [Cute_Tricks] on the enum `Trick_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Trick` MODIFY `category` ENUM('Basic', 'Acting', 'Communication', 'Agility', 'Scent_Work', 'Affection', 'Self_Control', 'Utility', 'Cute Tricks') NOT NULL;
