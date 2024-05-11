import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({ data: { email: "Xqk2s@example.com", password: "blabla", address: "", id_departamento: 1, id_municipio: 1 } });
  console.log(user);
}

main();
await prisma.$disconnect();
