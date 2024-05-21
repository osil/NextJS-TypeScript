import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const categories = await prisma.staffsex.findMany({
    where: {
      datasetid: 14,
    },
  });
  return Response.json(categories);
}
