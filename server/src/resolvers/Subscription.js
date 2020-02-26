import { POST_CREATED, COMMENT_CREATED } from '../constants'
import { withFilter } from 'apollo-server'

const Subscription = {
  postCreated: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator([POST_CREATED])
  },
  commentCreated: {
    subscribe: withFilter(
      (_, __, { pubsub }) => pubsub.asyncIterator([COMMENT_CREATED]),
      (payload, variables) => {
        return payload.commentCreated.postID === variables.postID
      }
    )
  }
}

export { Subscription as default }
