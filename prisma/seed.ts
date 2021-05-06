import { PrismaClient } from '@prisma/client';
import region from './data_fixtures/region';

const prisma = new PrismaClient();

async function main() {
  await region(prisma);
 

  console.log('DONE');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
