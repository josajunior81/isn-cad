/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Disciple` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Disciple" ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Disciple_email_key" ON "Disciple"("email");
