-- CreateTable
CREATE TABLE "Church" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "nickname" VARCHAR NOT NULL,
    "observations" TEXT,
    "meetingDay" VARCHAR,
    "meetingTime" VARCHAR,

    CONSTRAINT "Church_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciple" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "phone" VARCHAR,
    "birthdate" DATE,
    "isLeader" BOOLEAN DEFAULT false,
    "isPastor" BOOLEAN DEFAULT false,
    "convertionDate" DATE,
    "disciplerId" BIGINT,

    CONSTRAINT "Disciple_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_churchLeaders" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Church_nickname_key" ON "Church"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Disciple_name_key" ON "Disciple"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Disciple_email_key" ON "Disciple"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_churchLeaders_AB_unique" ON "_churchLeaders"("A", "B");

-- CreateIndex
CREATE INDEX "_churchLeaders_B_index" ON "_churchLeaders"("B");

-- AddForeignKey
ALTER TABLE "Disciple" ADD CONSTRAINT "Disciple_disciplerId_fkey" FOREIGN KEY ("disciplerId") REFERENCES "Disciple"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_churchLeaders" ADD CONSTRAINT "_churchLeaders_A_fkey" FOREIGN KEY ("A") REFERENCES "Church"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_churchLeaders" ADD CONSTRAINT "_churchLeaders_B_fkey" FOREIGN KEY ("B") REFERENCES "Disciple"("id") ON DELETE CASCADE ON UPDATE CASCADE;
