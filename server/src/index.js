const { GraphQLServer } = require('graphql-yoga')
const posts = [
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

let idCount = posts.length

const resolvers = {
  Query: {
    info: () => `This is the API of a Reddit Clone`,
    feed: () => posts
  },
  Mutation: {
    post: (parent, args) => {
      const post = { id: `post-${idCount++}`, title: args.title, url: args.url }
      posts.push(post)
      return post
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
