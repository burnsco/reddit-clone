import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'

const posts = [
  {
    id: '1',
    title: 'First Post!',
    url: 'www.google.ca',
    comments: 3,
    category: 'music',
    author: 'cburn343',
    votes: 34
  },
  {
    id: '2',
    title: 'Second Post!',
    url: 'www.reddit.com',
    comments: 3,
    category: 'music',
    author: 'tom34',
    votes: 1
  },
  {
    id: '3',
    title: 'The very Third Post!@#@',
    url: 'yahoo.ca',
    comments: 3,
    category: 'webdev',
    author: 'cburn343',
    votes: 12
  },
  {
    id: '4',
    title: '4th post!DF',
    url: 'www.google.ca',
    comments: 3,
    category: 'react',
    author: 'abb34dfdf',
    votes: 312
  }
]
const categories = [
  { id: 1, title: 'music', subreddit: '/r/music' },
  { id: 2, title: 'webdev', subreddit: '/r/webdev' },
  { id: 3, title: 'react', subreddit: '/r/react' },
  { id: 4, title: 'all', subreddit: '/' }
]

let idCount = posts.length

const resolvers = {
  Query: {
    feed: (parent, args) => {
      if (args.category) {
        return posts.filter(p => p.category === args.category)
      }
      if (args.category === 'all') {
        return posts
      } else {
        return posts
      }
    },
    categories: () => categories
  },

  Mutation: {
    post: (parent, args) => {
      const post = {
        id: `post-${idCount++}`,
        title: args.title,
        url: args.url,
        category: args.category,
        author: args.author
      }
      posts.push(post)
      return post
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
