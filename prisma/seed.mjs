import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
//import dotenv from 'dotenv'; //install dotenv package when .env file is not loaded

//dotenv.config();

const prisma = new PrismaClient();

//Run this command in terminal to seed database: node prisma/seed.mjs

const fakerTorreUser = () => {
    const roles = [
  'software engineer',
  'full stack developer',
  'frontend developer',
  'backend developer',
  'database administrator',
  'DevOps engineer',
  'system architect',
  'cloud engineer',
  'QA engineer',
  'security analyst',
  'network administrator',
  'UI/UX designer',
  'app developer',
  'wordpress developer',
  'graphic designer',
];
    return {
        full_name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        login_token: faker.string.alphanumeric(6),
        access_token: faker.string.alphanumeric(12),
        role: roles[Math.floor(Math.random() * roles.length)],
        city: faker.location.city(),
        country: faker.location.country(), // Generates a random country
    };
};

const fakerTorreSkill = () => {
    const skills = ['.Net', 'Figma', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Django', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Cybersecurity', 'REST APIs', 'GraphQL', 'Prisma', 'Firebase', 'TensorFlow'];
    const levels = ['beginner', 'intermediate', 'advanced', 'expert', 'master'];

    return {
        user_id: faker.number.int({ min: 1, max: 102 }),
        skill: skills[Math.floor(Math.random() * skills.length)],
        level: levels[Math.floor(Math.random() * levels.length)],
    };
};

/////// This block of code is for unique nums ///////
let generatedNumbers = new Set();

function uniqueNumber(min, max) {
    let number;
    do {
        number = faker.number.int({ min: min, max: max });
    } while (generatedNumbers.has(number));

    generatedNumbers.add(number);
    return number;
}
////////////////////////////////////////////////////

const fakerRounds = 50;

async function seedAll() {
    try {
        for (let i = 0; i < fakerRounds; i++) {
            //await prisma.torreUser.create({ data: fakerTorreUser() });
            await prisma.Skill.create({ data: fakerTorreSkill() });
        }
        console.log('Seeded successfully');
    } catch (error) {
        console.error('Error seeding:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedAll();