import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'
import MutationResponse from './MutationResponse'

const resolvers = {
  MutationResponse,
  Query,
  Mutation,
  Subscription
}

export { resolvers as default }
