const Subscription = {
  post: {
    subscribe(root, args, { db }, info) {
      return db.subscription.post(
        {
          where: {
            node: {
              post: {
                id: args.postID
              }
            }
          }
        },
        info
      )
    },

    comment: {
      subscribe(root, args, { db }, info) {
        return db.subscription.comment({
          where: {
            node: {
              post: {
                id: args.postID
              }
            }
          }
        })
      }
    }
  }
}
export { Subscription as default }
