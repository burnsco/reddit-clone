import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://34.95.50.242.xip.io:4466',
  secret: 'opendooropiate15150'
})

export default db
