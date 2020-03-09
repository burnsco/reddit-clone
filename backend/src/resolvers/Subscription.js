const Subscription = {
  post: async (root, args, { db }, info) =>
    await db.subscription.post(null, info),

  comment: async (root, { postID }, { db }, info) =>
    await db.subscription.comment(null, info)
}

export { Subscription as default }
