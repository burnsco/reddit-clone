import { POST, COMMENT } from '../constants'
import { withFilter } from 'apollo-server'

const Subscription = {
  post: {
    subscribe: async (root, args, { db }) =>
      await db.$subscribe
        .post({
          mutation_in: ['CREATED']
        })
        .node()
  },
  comment: {
    subscribe: async (root, args, { db }) =>
      await db.$subscribe
        .comment({
          mutation_in: ['CREATED']
        })
        .node()
  }
}

export { Subscription as default }
