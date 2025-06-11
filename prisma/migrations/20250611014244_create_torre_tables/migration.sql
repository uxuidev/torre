-- CreateTable
CREATE TABLE "torre_users" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "login_token" TEXT,
    "access_token" TEXT,
    "role" TEXT NOT NULL,
    "city" TEXT,
    "country" TEXT,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "torre_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "torre_skills" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skill" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "torre_skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "torre_users_email_key" ON "torre_users"("email");

-- AddForeignKey
ALTER TABLE "torre_skills" ADD CONSTRAINT "torre_skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "torre_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
