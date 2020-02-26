import { POST_CREATED } from '../constants'

const Subscription = {
  postCreated: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator([POST_CREATED])
  }
}

export { Subscription as default }
