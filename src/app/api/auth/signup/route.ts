import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
type Props = {};
export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        updatedAt: new Date(),
      },
    });

    return Response.json({ message: "User created", user });
  } catch (error) {
    return Response.json({ error: "User could not be created" });
  }
}
