import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { posts, categories, users, comments } from './data'

const resolvers = {
  Query: {
    users: () => users,
    categories: () => categories,
    posts: () => posts,
    post: (parent, args) => posts.find(post => post.id === args.postID),
    comments: () => comments
  },

  Post: {
    author: (parent, args) => {
      return users.find(user => user.username === parent.author)
    },
    comments: (parent, args) => {
      return comments.filter(c => {
        return c.postID === parent.id
      })
    }
  },

  User: {
    posts: (parent, args) => {
      return posts.filter(p => {
        return p.author === parent.username
      })
    },
    comments: (parent, args) => {
      return comments.filter(c => {
        return c.author === parent.username
      })
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
