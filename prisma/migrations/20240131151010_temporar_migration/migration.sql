-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_clientId_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "isPinned" SET DEFAULT false,
ALTER COLUMN "is_reccurent" SET DEFAULT false;
