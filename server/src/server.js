import { ApolloServer } from 'apollo-server'
import typeDefs from './typedefs/index'
import resolvers from './resolvers/root'
import { prisma as db } from './generated/prisma-client'
import authenticate from './auth/authenticate'
import { getUser as user } from './auth/getUser'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ ...req, db, user }),
  middlewares: [authenticate]
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscriptions ready at ${subscriptionsUrl}`)
})
