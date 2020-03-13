const Subscription = {
  postAdded: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.post({ where: { mutation_in: ['CREATED'] } }, info)
    }
  },
  commentAdded: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.comment(
        { where: { node: { post: { id: postID } } } },
        info
      )
    }
  }
}

export { Subscription as default }
