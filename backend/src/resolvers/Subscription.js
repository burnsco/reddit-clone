const Subscription = {
  post: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.post({ where: { mutation_in: ['CREATED'] } }, info)
    }
  },
  comment: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.comment(
        { where: { mutation_in: ['CREATED'] } },
        info
      )
    }
  },
  vote: {
    subscribe(root, { postID }, { db }, info) {
      return db.subscription.comment(
        { where: { mutation_in: ['UPVOTE', 'DOWNVOTE', 'CREATED'] } },
        info
      )
    }
  }
}

export { Subscription as default }
