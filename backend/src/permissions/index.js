const { allow, shield, rule } = require('graphql-shield')

const isAuthenticated = rule({ cache: 'contextual' })((parent, args, ctx) => {
  return Boolean(ctx.req.userId)
})

const permissions = shield({
  Query: {
    '*': isAuthenticated
  },
  Mutation: {
    '*': isAuthenticated,
    loginUser: allow,
    createUser: allow
  }
})

export default permissions
