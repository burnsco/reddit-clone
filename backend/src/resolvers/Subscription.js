const Subscription = {
  post: async (root, args, { db }) =>
    await db.$subscribe
      .post({
        mutation_in: ['CREATED']
      })
      .node(),

  comment: async (root, { postID }, { db }) =>
    await db.$subscribe
      .comment({
        mutation_in: ['CREATED'],
        node: {
          id: postID
        }
      })
      .node()
}

export { Subscription as default }
