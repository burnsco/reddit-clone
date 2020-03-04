import { Prisma } from 'prisma-binding'

// bindings for the docker server (prisma) with generated types/etc

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

export default db
