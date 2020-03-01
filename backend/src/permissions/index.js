import { shield, allow } from 'graphql-shield'
import { rules } from './rules'

const permissions = shield({
  Query: {
    '*': rules.isAuthenticated
  },
  Mutation: {
    '*': rules.isAuthenticated,
    loginUser: allow,
    createUser: allow
  }
})

export default permissions
