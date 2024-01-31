-- AlterTable
ALTER TABLE "ActionItem" ADD COLUMN     "assigneeId" INTEGER,
ALTER COLUMN "deadline" DROP NOT NULL;
