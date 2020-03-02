const Query = {
  currentUser: async (root, args, { db, user }) => {
    const requested = await db.user({ id: user.userId })
    return requested
  },
  user: (root, args, { db }) => db.user({ id: args.userId }),
  users: (root, args, { db }) => db.users(),
  categories: (root, args, { db }) => db.categories(),
  post: (root, args, { db }) => db.post({ id: args.postId }),
  posts: (root, args, { db }) => {
    let opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after
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

    if (args.orderBy) {
      opArgs.orderBy = args.orderBy
    }

    return db.posts(opArgs)
  },

  comments: (root, args, { db }) => {
    let opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after
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

    if (args.orderBy) {
      opArgs.orderBy = args.orderBy
    }
    return db.comments(opArgs)
  },

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
