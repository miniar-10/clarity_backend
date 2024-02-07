/*
  Warnings:

  - You are about to drop the column `socre` on the `Milestone` table. All the data in the column will be lost.
  - Added the required column `score` to the `Milestone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Milestone" DROP COLUMN "socre",
ADD COLUMN     "score" DOUBLE PRECISION NOT NULL;
