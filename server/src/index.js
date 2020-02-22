import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { posts, categories } from './data'
import uuidv1 from 'uuid/v1'

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
        id: `post-${uuidv1()}`,
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
