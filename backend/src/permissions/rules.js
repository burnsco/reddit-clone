import { rule } from 'graphql-shield'

export const rules = {
  isAuthenticated: rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
      return Boolean(ctx.req.user)
    }
  ),
  isAdmin: rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return ctx.user.role === 'admin'
  }),

  isModerator: rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
      return ctx.user.role === 'editor'
    }
  )
}
