-- DropForeignKey
ALTER TABLE "ActionItem" DROP CONSTRAINT "ActionItem_milestoneId_fkey";

-- AddForeignKey
ALTER TABLE "ActionItem" ADD CONSTRAINT "ActionItem_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "Milestone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
