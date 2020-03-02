import Query from './Query'
import Mutation from './Mutation'
import User from './User'
import Post from './Post'
import Comment from './Comment'
import Subscription from './Subscription'
import MutationResponse from './MutationResponse'

const resolvers = {
  MutationResponse,
  Query,
  Mutation,
  User,
  Post,
  Comment,
  Subscription
}

export { resolvers as default }
