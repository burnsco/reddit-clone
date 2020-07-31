const Subscription = {
  postAdded: {
    subscribe(root, args, { db }, info) {
      return db.subscription.post(
        { where: { mutation_in: ["CREATED", "UPDATED", "DELETED"] } },
        info
      )
    }
  },
  commentAdded: {
    subscribe(root, _, { db }, info) {
      return db.subscription.comment(
        { where: { mutation_in: ["CREATED", "UPDATED", "DELETED"] } },
        info
      )
    }
  }
}

export { Subscription as default }
