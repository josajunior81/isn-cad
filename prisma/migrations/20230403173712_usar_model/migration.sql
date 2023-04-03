/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Disciple` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Disciple" ADD COLUMN     "userId" BIGINT;

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Disciple_userId_key" ON "Disciple"("userId");

-- AddForeignKey
ALTER TABLE "Disciple" ADD CONSTRAINT "Disciple_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
