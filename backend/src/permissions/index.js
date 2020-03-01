import { allow, shield, rule } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.user !== null
  }
)

const permissions = shield({
  Query: {
    '*': allow
  },

  Mutation: {
    '*': allow
  }
})

export default permissions
