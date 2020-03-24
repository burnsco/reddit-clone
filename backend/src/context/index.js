import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET
})

export default db
