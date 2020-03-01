import { rule, shield, and, or, not } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.user !== null
  }
)
const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === 'admin'
  }
)

const isModerator = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === 'editor'
  }
)

const permissions = shield({
  Query: {
    currentUser: not(isAuthenticated),
    categories: not(isAuthenticated),
    users: not(isAuthenticated),
    posts: not(isAuthenticated),
    comments: not(isAuthenticated),
    user: not(isAuthenticated),
    post: not(isAuthenticated),
    commentsForPost: not(isAuthenticated),
    postsByUser: not(isAuthenticated),
    commentsByUser: not(isAuthenticated)
  },

  Mutation: {
    createUser: not(isAuthenticated),
    loginUser: not(isAuthenticated),
    createPost: not(isAuthenticated),
    createComment: not(isAuthenticated),
    updateUser: not(isAuthenticated),
    updatePost: not(isAuthenticated),
    updateComment: not(isAuthenticated),
    deleteUser: not(isAuthenticated),
    deletePost: not(isAuthenticated),
    deleteComment: not(isAuthenticated)
  }
})

export default permissions
