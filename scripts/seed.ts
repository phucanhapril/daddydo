import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate reset`
    const userData: Prisma.UserCreateArgs['data'][] = [
      {
        id: 'd2ace2e8-09cf-4a62-bfea-1ef53aae9c08',
        createdAt: '2023-11-01T23:43:27.661284+00:00',
        updatedAt: '2023-11-01T23:43:27.675125+00:00',
        name: 'April',
      },
    ]

    console.log('\nSeeding data...\n')
    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      userData.map(async (data: Prisma.UserCreateArgs['data']) => {
        const record = await db.user.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
