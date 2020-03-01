const { allow, shield, rule, and, or, not } = require('graphql-shield')

const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    console.log(ctx.user)
    return ctx.user.role === 'admin'
  }
)

const isAuthenticated = rule()((parent, args, ctx, info) => ctx.user !== null)

const permissions = shield({
  Query: {
    users: allow
  },
  Mutation: {
    '*': isAuthenticated,
    loginUser: allow,
    createUser: allow
  }
})

export default permissions
