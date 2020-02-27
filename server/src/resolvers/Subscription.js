import { POST, COMMENT } from '../constants'
import { withFilter } from 'apollo-server'

const Subscription = {
  post: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator([POST])
  },
  comment: {
    subscribe: withFilter(
      (_, __, { pubsub }) => pubsub.asyncIterator([COMMENT]),
      (payload, variables) => {
        return payload.comment.data.postID === variables.postID
      }
    )
  }
}

export { Subscription as default }
