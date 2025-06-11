import prisma from '@/app/db';

export async function GET() {
  try {
    const skills = await prisma.skill.findMany();
    return Response.json(skills, { status: 200 });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
