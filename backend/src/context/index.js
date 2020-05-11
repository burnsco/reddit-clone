import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://eu1.prisma.sh/corey-burns-8e3243/demo/dev'
})

export default db
