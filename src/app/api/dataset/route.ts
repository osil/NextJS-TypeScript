import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const result = await prisma.dataset.findMany({
    orderBy: {
      datasetid: "desc",
    },
  });
  return Response.json(result);
}
