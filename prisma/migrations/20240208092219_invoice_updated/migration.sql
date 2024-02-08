/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "hourRate" DOUBLE PRECISION,
ADD COLUMN     "wordRate" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "invoiceId";

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_id_fkey" FOREIGN KEY ("id") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
