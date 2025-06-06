import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.users.create({
    data: {
      name: 'Jayde',
      email: 'jayde@jaydemitchell.com',
      password: 'password'
    },
  })

  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
