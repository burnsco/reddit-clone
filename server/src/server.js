import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { posts, categories, users, comments } from './data'
import { v4 as uuidv4 } from 'uuid'

const resolvers = {
  Query: {
    user: (parent, args) => users.find(user => user.id === args.userID),
    users: () => users,
    categories: () => categories,
    post: (parent, args) => posts.find(post => post.id === args.postID),
    posts: (parent, args) =>
      !args.category ? posts : posts.filter(p => p.category === args.category),
    comments: () => comments
  },

  Mutation: {
    createUser: (parent, { data: { username, email } }) => {
      if (users.some(user => user.email === email)) {
        throw new Error('Email taken.')
      }
      const user = {
        id: uuidv4(),
        email,
        username
      }
      users.push(user)
      return user
    },

    createPost: (parent, { category, author, title, url }) => {
      const post = {
        id: uuidv4(),
        type: 'link',
        published: true,
        votes: Math.floor(Math.random() * Math.floor(100)),
        category,
        author,
        title,
        url
      }
      posts.push(post)
      return post
    },

    createComment: (parent, { postID, body, author }) => {
      const comment = {
        id: uuidv4(),
        postID,
        body,
        author
      }
      comments.push(comment)
      return comment
    }
  },

  Post: {
    author: (parent, args) =>
      users.find(user => user.username === parent.author),
    comments: (parent, args) => comments.filter(c => c.postID === parent.id)
  },

  User: {
    posts: (parent, args) => posts.filter(p => p.author === parent.username),
    comments: (parent, args) =>
      comments.filter(c => c.author === parent.username)
  },
  Comment: {
    author: (parent, args) =>
      users.find(user => user.username === parent.author)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🧨  Server ready at ${url} `)
})
