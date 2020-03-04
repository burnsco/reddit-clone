const Query = {
  currentUser: async (root, args, { db, user }, info) => {
    const requested = await db.query.user({
      where: {
        id: user.userID
      }
    })
    return requested
  },

  user: (root, args, { db }, info) => db.query.user({ id: args.userID }),

  users: async (root, args, { db }, info) => {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        email_contains: args.query
      }
    }

    const results = await db.query.users(opArgs, info)
    return results
  },

  categories: async (root, args, { db }, info) => {
    const results = await db.query.categories(null, info)
    return results
  },

  posts: async (root, args, { db }, info) => {
    const results = await db.query.posts(null, info)
    return results
  },

  post: (root, args, { db }, info) => db.post(),

  comments: (root, args, { db }, info) => db.comments()
}

export { Query as default }
