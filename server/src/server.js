import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { posts, categories, users, comments } from './data'

// FIXME refactor the resolvers so I don't have to make so many
// TODO  make a function that sums the comments for given postID
const resolvers = {
  Query: {
    user: (parent, args) => users.find(user => user.id === args.userID),
    users: () => users,
    categories: () => categories,
    post: (parent, args) => posts.find(post => post.id === args.postID),
    posts: (parent, args) => {
      if (!args.category) {
        return posts
      } else {
        return posts.filter(p => {
          return p.category === args.category
        })
      }
    },
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
