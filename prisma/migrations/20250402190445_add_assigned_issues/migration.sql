-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `assignedToUserId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignedToUserId_fkey` FOREIGN KEY (`assignedToUserId`) REFERENCES `User`(`clerkId`) ON DELETE SET NULL ON UPDATE CASCADE;
