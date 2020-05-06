const Subscription = {
  postAdded: {
    subscribe(root, args, { db }, info) {
      return db.subscription.post({ where: { mutation_in: ['CREATED'] } }, info)
    }
  },
  commentAdded: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.comment(
        { where: { mutation_in: ['CREATED'] } },
        info
      )
    }
  },
  voteAdded: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.vote({ where: { mutation_in: ['CREATED'] } }, info)
    }
  }
}

export { Subscription as default }
