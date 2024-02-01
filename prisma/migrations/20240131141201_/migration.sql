/*
  Warnings:

  - You are about to drop the column `isDeliverableLanguage` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `isRessourceLanguage` on the `Language` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Language" DROP COLUMN "isDeliverableLanguage",
DROP COLUMN "isRessourceLanguage";

-- CreateTable
CREATE TABLE "ProjectLanguage" (
    "id" SERIAL NOT NULL,
    "languageId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "isRessourceLanguage" BOOLEAN NOT NULL DEFAULT false,
    "isDeliverableLanguage" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProjectLanguage_pkey" PRIMARY KEY ("id")
);
