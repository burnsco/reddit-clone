const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    info: String!
    feed: [Post!]!
  }

  type Post {
    id: ID
    title: String
    url: String
    comments: Int
    category: String
    author: String
    votes: Int
  }
`
let posts = [
  {
    id: '1',
    title: 'check this out',
    url: 'www.google.ca',
    comments: 3,
    category: '/a/music',
    author: 'cburn343',
    votes: 34
  },
  {
    id: '2',
    title: 'first one',
    url: 'www.google.ca',
    comments: 3,
    category: '/a/music',
    author: 'cburn343',
    votes: 34
  },
  {
    id: '3',
    title: 'first one',
    url: 'www.google.ca',
    comments: 3,
    category: '/a/music',
    author: 'cburn343',
    votes: 34
  },
  {
    id: '4',
    title: 'first one',
    url: 'www.google.ca',
    comments: 3,
    category: '/a/fag',
    author: 'abb34',
    votes: 312
  }
]

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
  typeDefs,
  resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
