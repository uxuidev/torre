import prisma from '@/app/db';

export async function GET() {
  try {
    const users = await prisma.torreUser.findMany();
    return Response.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
