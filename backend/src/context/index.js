import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://127.0.0.1:4466'
})

export default db
