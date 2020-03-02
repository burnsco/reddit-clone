const Query = {
  currentUser: async (root, args, { db, user }) => {
    const requested = await db.user({ id: user.userId })
    return requested
  },

  categories: (root, args, { db }) => db.categories(),

  users: (root, args, { db }) => db.users(),

  posts: (root, args, { db }) => {
    const opArgs = {
      first: args.first,
      skip: args.skip
    }

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            title_contains: args.query
          }
        ]
      }
    }

    return db.posts(opArgs)
  },

  comments: (root, args, { db }) => db.comments(),

  user: (root, args, { db }) => db.user({ id: args.userId }),

  post: (root, args, { db }) => db.post({ id: args.postId }),

  commentsForPost: (root, args, { db }) =>
    db.post({ id: args.postID }).comments(),

  postsByUser: (root, args, { db }) =>
    db
      .user({
        id: args.userID
      })
      .posts(),

  commentsByUser: (root, args, { db }) =>
    db
      .user({
        id: args.userID
      })
      .comments()
}

export { Query as default }
