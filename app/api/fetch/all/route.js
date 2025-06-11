import prisma from '@/app/db';

export async function GET() {
  try {
    // Fetch all users along with their related skills
    const usersWithSkills = await prisma.torreUser.findMany({
      include: {
        skills: true, // Include all related skills for each user
      },
    });

    return Response.json(usersWithSkills, { status: 200 });
  } catch (error) {
    console.error("Error fetching users with skills:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
