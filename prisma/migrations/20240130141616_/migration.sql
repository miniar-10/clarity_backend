/*
  Warnings:

  - Made the column `milestoneId` on table `ActionItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Delivrable" DROP CONSTRAINT "Delivrable_milestoneId_fkey";

-- AlterTable
ALTER TABLE "ActionItem" ALTER COLUMN "milestoneId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ActionItem" ADD CONSTRAINT "ActionItem_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "Milestone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
