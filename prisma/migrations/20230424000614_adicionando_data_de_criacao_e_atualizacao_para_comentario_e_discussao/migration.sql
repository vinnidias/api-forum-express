/*
  Warnings:

  - Added the required column `updated_at` to the `discussions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discussions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "discussions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_discussions" ("authorId", "content", "id", "title") SELECT "authorId", "content", "id", "title" FROM "discussions";
DROP TABLE "discussions";
ALTER TABLE "new_discussions" RENAME TO "discussions";
CREATE TABLE "new_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "discussionId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comments_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "discussions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comments" ("authorId", "content", "discussionId", "id") SELECT "authorId", "content", "discussionId", "id" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
