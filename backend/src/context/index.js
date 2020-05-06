import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'rFbvSJJpt1GgpZmgX9Ty5zPkU7FVn3YO0M9njDvevTU1UcQdrzajbcO8RRkKgv3'
})

export default db
