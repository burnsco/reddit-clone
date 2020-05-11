import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://prismacontainer.azurewebsites.net'
})

export default db
