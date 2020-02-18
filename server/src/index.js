import posts from './data'
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    info: () => `This is the API of a Reddit Clone`,
    feed: () => posts
  },
  Post: {
    id: parent => parent.id,
    title: parent => parent.title,
    url: parent => parent.url,
    comments: parent => parent.comments,
    category: parent => parent.category,
    author: parent => parent.author,
    votes: parent => parent.votes
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
