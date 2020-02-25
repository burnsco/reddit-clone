import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import db from './db'
import { v4 as uuidv4 } from 'uuid'

const resolvers = {
  Query: {
    users: (_, __, { db }) => db.users,
    user: (_, { userID }, { db }) => db.users.find(u => u.id === userID),
    categories: (_, __, { db }) => db.categories,
    posts: (_, { category }, { db }) =>
      !category ? db.posts : db.posts.filter(p => p.category === category),
    post: (_, { postID }, { db }) => db.posts.find(p => p.id === postID),
    comments: (_, __, { db }) => db.comments
  },
  Mutation: {
    createUser: (_, { ...args }, { db }) => {
      if (db.users.some(u => u.email === args.email)) {
        throw new Error('Email taken.')
      }
      const user = {
        id: uuidv4(),
        ...args.data
      }
      db.users.push(user)
      return user
    },
    deleteUser: (_, { id }, { db }) => {
      const userIndex = db.users.findIndex(u => u.id === id)
      if (userIndex === -1) {
        throw new Error('User not found')
      }
      const deletedUser = db.users.splice(userIndex, 1)
      return deletedUser[0]
    },
    createPost: (_, { ...args }, { db }) => {
      const post = {
        id: uuidv4(),
        type: 'link',
        published: true,
        votes: Math.floor(Math.random() * Math.floor(100)),
        ...args.data
      }
      db.posts.push(post)
      return post
    },
    deletePost: (_, { id }, { db }) => {
      const postIndex = db.posts.findIndex(p => p.id === id)
      if (postIndex === -1) {
        throw new Error('post does not exist!')
      }
      const deletedPost = db.posts.splice(postIndex, 1)
      return deletedPost[0]
    },
    createComment: (_, { ...args }, { db }) => {
      const comment = {
        id: uuidv4(),
        ...args.data
      }
      db.comments.push(comment)
      return comment
    },
    deleteComment: (_, { id }, { db }) => {
      const commentIndex = db.comments.findIndex(c => c.id === id)
      if (commentIndex === -1) {
        throw new Error('comment does not exist!')
      }
      const deletedComment = db.comments.splice(commentIndex, 1)
      return deletedComment[0]
    }
  },
  Post: {
    author: ({ author }, _, { db }) =>
      db.users.find(u => u.username === author),
    comments: ({ id }, _, { db }) => db.comments.filter(c => c.postID === id)
  },
  User: {
    posts: ({ username }, { db }) =>
      db.posts.filter(p => p.author === username),
    comments: ({ username }, { db }) =>
      db.comments.filter(c => c.author === username)
  },
  Comment: {
    author: ({ author }, { db }) => db.users.find(u => u.username === author)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db
  }
})

server.listen().then(({ url }) => {
  console.log(`🧨  Server ready at ${url} `)
})
