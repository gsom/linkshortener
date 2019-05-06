
CREATE TABLE "ShortLink"
(
    "Id" SERIAL NOT NULL,
    "ShortUrl" TEXT NOT NULL UNIQUE,
    "FullUrl" TEXT NOT NULL,
    CONSTRAINT "ShortLink_pk" PRIMARY KEY ("Id")
);