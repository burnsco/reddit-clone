const Query = {
  currentUser: (parent, args, { user, db }) => {
    if (!user) {
      throw new Error('Not Authenticated')
    }
    return db.user({ id: user.id })
  },
  categories: (root, args, { db }) => db.categories(),
  users: (root, args, { db }) => db.users(),
  posts: (root, args, { db }) => db.posts(),
  comments: (root, args, { db }) => db.comments(),

  user: (root, args, { db }) => db.user({ id: args.userID }),
  post: (root, args, { db }) => db.post({ id: args.postID }),

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
