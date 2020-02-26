import { ApolloServer } from 'apollo-server'
import typeDefs from './typedefs/index'
import resolvers from './resolvers/root'
import context from './context/index'
import plugins from './plugins/index'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins
})

server.listen().then(({ url }) => {
  console.log(`🧨  Server ready at ${url} `)
})
