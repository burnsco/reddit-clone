import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { posts, categories, users, comments } from './data'

const resolvers = {
  Query: {
    users: () => users,
    categories: () => categories,
    posts: () => posts,
    comments: () => comments
  },

  Post: {
    author(parent, args) {
      users.find(user => user.username === parent.author)
    },
    comments(parent, args) {
      comments.filter(c => c.postID === parent.id)
    }
  },

  User: {
    posts(parent, args) {
      posts.filter(p => p.author === parent.username)
    },
    comments(parent, args) {
      comments.filter(c => c.author === parent.username)
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
