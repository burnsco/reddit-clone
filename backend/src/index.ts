import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typedefs/index'
import resolvers from './resolvers/root'
import { prisma as db } from './generated/prisma-client'
import getUser from './utils/getUser'
import { applyMiddleware } from 'graphql-middleware'
import permissions from './permissions'
require('dotenv').config()

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers
  }),
  permissions
)

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const user = await getUser(token)

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
