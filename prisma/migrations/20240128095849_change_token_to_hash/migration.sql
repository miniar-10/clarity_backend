/*
  Warnings:

  - You are about to drop the column `token` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `hash` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "token",
ADD COLUMN     "hash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "token" DROP NOT NULL,
ALTER COLUMN "whatsapp" DROP NOT NULL;
