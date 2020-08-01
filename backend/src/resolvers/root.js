import Query from "./Query"
import Mutation from "./Mutation"
import MutationResponse from "./MutationResponse"
import Subscription from "./Subscription"

const resolvers = {
  MutationResponse,
  Query,
  Mutation,
  Subscription
}

export { resolvers as default }
