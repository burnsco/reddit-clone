import { ApolloServer, PubSub } from 'apollo-server'
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
  context: req => ({
    ...req,
    pubsub,
    user: getUser(req),
    db
  })
})
  .listen()
  .then(({ url, subscriptionsUrl }) => {
    console.log(`Server ready at ${url}`)
    console.log(`Subscriptions ready at ${subscriptionsUrl}`)
  })
