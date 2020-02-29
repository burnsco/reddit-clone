const Query = {
  categories: (parent, args, { db }) => db.categories(),
  users: (parent, args, { db }) => db.users(),
  posts: (parent, args, { db }) => db.posts(),
  comments: (parent, args, { db }) => db.comments(),

  user: (parent, args, { db }) => db.user({ id: args.userID }),
  post: (parent, args, { db }) => db.post({ id: args.postID }),

  commentsForPost: (parent, args, { db }) =>
    db.post({ id: args.postID }).comments(),

  postsByUser: (parent, args, { db }) =>
    db
      .user({
        id: args.userID
      })
      .posts(),
  commentsByUser: (parent, args, { db }) =>
    db
      .user({
        id: args.userID
      })
      .comments()
}

export { Query as default }
