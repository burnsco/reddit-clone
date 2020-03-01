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
  })
)

const server = new ApolloServer({
  schema,
  context: req => ({
    req,
    db
  })
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscriptions ready at ${subscriptionsUrl}`)
})
