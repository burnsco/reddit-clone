import { allow, shield, rule } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.user !== null
  }
)

const permissions = shield({
  Query: {
    currentUser: allow,
    categories: allow,
    users: allow,
    posts: allow,
    comments: allow,
    user: allow,
    post: allow,
    commentsForPost: allow,
    postsByUser: allow,
    commentsByUser: allow
  },

  Mutation: {
    createUser: allow,
    loginUser: allow,
    createPost: allow,
    createComment: allow,
    updateUser: allow,
    updatePost: allow,
    updateComment: allow,
    deleteUser: allow,
    deletePost: allow,
    deleteComment: allow
  }
})

export default permissions
