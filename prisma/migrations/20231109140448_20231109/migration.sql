-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
