/*
  Warnings:

  - You are about to drop the `_LanguageToProject` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Language` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "Ressource" DROP CONSTRAINT "Ressource_projectId_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToProject" DROP CONSTRAINT "_LanguageToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToProject" DROP CONSTRAINT "_LanguageToProject_B_fkey";

-- DropTable
DROP TABLE "_LanguageToProject";

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");
