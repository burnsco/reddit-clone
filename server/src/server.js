import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import resolvers from './resolverz'
import db from './db'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db
  }
})

server.listen().then(({ url }) => {
  console.log(`🧨  Server ready at ${url} `)
})
