import { ApolloServer, PubSub } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typedefs/index'
import db from './context/index'
import resolvers from './resolvers/root'
import { getUser } from './utils'
import { applyMiddleware } from 'graphql-middleware'
require('dotenv').config()

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
)

const pubsub = new PubSub()

const server = new ApolloServer({
  schema,
  context: async req => ({
    ...req,
    pubsub,
    user: getUser(req),
    db
  })
})

const app = express()
const path = '/'
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(cors(corsOptions))

server.applyMiddleware({ app, path })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
