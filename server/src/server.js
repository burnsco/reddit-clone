import { ApolloServer } from 'apollo-server'
import typeDefs from './typedefs/index'
import resolvers from './resolvers/root'
import { prisma as db } from './generated/prisma-client'
import getUser from './utils/getUser'
require('dotenv').config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const user = getUser(token)

    return {
      user,
      db
    }
  }
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscriptions ready at ${subscriptionsUrl}`)
})
