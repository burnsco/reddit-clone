import { ApolloServer } from 'apollo-server'
import typeDefs from './typedefs/index'
import resolvers from './resolvers/root'
import context from './context/index'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.listen().then(({ url }) => {
  console.log(`🧨  Server ready at ${url} `)
})
