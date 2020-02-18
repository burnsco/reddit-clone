const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    info: String!
    feed: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    url: String!
    comments: Int!
    category: String!
    author: String!
    votes: Int!
  }
`
let posts = [
  {
    id: '1',
    title: 'First Post!',
    url: 'www.google.ca',
    comments: 3,
    category: '/r/music',
    author: 'cburn343',
    votes: 34
  },
  {
    id: '2',
    title: 'Second Post!',
    url: 'www.reddit.com',
    comments: 3,
    category: '/r/television',
    author: 'tom34',
    votes: 1
  },
  {
    id: '3',
    title: 'The very Third Post!@#@',
    url: 'yahoo.ca',
    comments: 3,
    category: '/r/webdev',
    author: 'cburn343',
    votes: 12
  },
  {
    id: '4',
    title: '4th post!DF',
    url: 'www.google.ca',
    comments: 3,
    category: '/r/react',
    author: 'abb34dfdf',
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
