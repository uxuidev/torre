This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Title
Torre Test

## Description
Data Visualization skills are shown along with some backend and frontend work. Following steps are taken:
1. Created Next.js project
2. Installed necessary libraries
3. Installed Prisma (ORM)
4. Created prisma schema in which two tables are structed with parent/child relationship (one-to-many) where torre_users a parent table and torre_skills a child table respectively
5. Environment variable are settled in .env file
6. Run migrations along with some modificaion in child table schema to add unique constraint
7. After creation of tables, database is seeded by using faker-js/faker
8. Database seeding is confirmed by observing data using pgAdmin
9. Created API to fetch data from torre_skills table
10. Displayed data in piechart and barchart using Chart.js with Next.js

## Work Duration
11 - 12 hours

## LLM Prompts
Some LLM Prompts to Copilot during work are as follows:

Hello copilot, I have following endpoints given so that I could build something amazing: POST https://torre.ai/api/entities/_searchStream (searches for people and organizations using streams) GET https://torre.ai/api/genome/bios/$username (retrieves the genome information of any given $username) WEB https://arda.torre.co/webjars/swagger-ui/index.html (people search documentation) WEB https://search.torre.co/webjars/swagger-ui/index.html (job search documentation) Unless I understand which data is returned, it would be difficult to decide what I should build. Will you help me getting data from these endpoints using postman?

Do you mean to say other two docs belongs to documentation of first two endpoints?

Ok so what will be the complete endpoint with some fake ggId to test it with postman?

https://torre.ai/api/genome/bios/adeelrauf so far I could obtain data from this endpoint only where adeelrauf is my own username.

what do ggId mean? Don't you think gg point out the format of Id?

No luck, I think unless I know the payload format, can't get it done.

Kindly check the following prisma.schema file and make corrections wherever required provided TorreUser contain id as primar key which is used as foriegn key in Skill table to connect both tables: generator client { provider = "prisma-client-js" } datasource db { provider = "postgresql" url = env("DATABASE_URL") } model TorreUser { id Int @id @default(autoincrement()) full_name String? email String password String? login_token String? access_token String? role String city String? country String? created_at DateTime @default(now()) @db.Timestamp(0) updated_at DateTime @default(now()) @updatedAt @db.Timestamp(0) @@unique([domain, email]) @@map("torreusers") } model Skill { id Int @id @default(autoincrement()) user_id Int skill String level String created_at DateTime @default(now()) @db.Timestamp(0) updated_at DateTime @default(now()) @updatedAt @db.Timestamp(0) @@map("skills") }

I'm using Prisma to create tables. I defined following two tables and defined relationship between them. Kindly see everything is fine or I did some mistake somewhere. Following is prisma.schema file: generator client { provider = "prisma-client-js" } datasource db { provider = "postgresql" url = env("DATABASE_URL") } model TorreUser { id Int @id @default(autoincrement()) full_name String? email String @unique password String? login_token String? access_token String? role String city String? country String? created_at DateTime @default(now()) @db.Timestamp(0) updated_at DateTime @default(now()) @updatedAt @db.Timestamp(0) skills Skill[] @relation("torre_skills") @@map("torre_users") } model Skill { id Int @id @default(autoincrement()) user_id Int skill String level String created_at DateTime @default(now()) @db.Timestamp(0) updated_at DateTime @default(now()) @updatedAt @db.Timestamp(0) torreUser TorreUser @relation("torre_skills", fields: [user_id], references: [id], onDelete: Cascade, onUpdate: Cascade) @@map("torre_skills") }

And so on

## Responsiveness & SEO
Used bootsrap 5 for responsiveness and added titile + descripton for SEO.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
