import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://mysterious-citadel-06253.herokuapp.com'
})

export default db
