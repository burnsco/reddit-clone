const Query = {
  currentUser: async (root, args, { db, user }) => {
    const requested = await db.user({ id: user.userId })
    return requested
  },

  categories: (root, args, { db }) => db.categories(),

  users: (root, args, { db }) => db.users(),

  posts: (root, args, { db }) => db.posts(),

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
