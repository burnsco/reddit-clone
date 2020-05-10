import { Prisma } from 'prisma-binding'

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://salty-tor-15652.herokuapp.com/reddit-clone-db/dev',
  secret: 'rFbvSJJpt1GgpZmgX9Ty5zPkU7FVn3YO0M9njDvevTU1UcQdrzajbcO8RRkKgv3'
})

export default db
