/*
  Warnings:

  - A unique constraint covering the columns `[user_id,skill]` on the table `torre_skills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "torre_skills_user_id_skill_key" ON "torre_skills"("user_id", "skill");
