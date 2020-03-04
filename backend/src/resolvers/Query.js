const Query = {
  currentUser: async (root, args, { db, user }) => {
    const requested = await db.user({ id: user.userID })
    return requested
  },

  user: (root, args, { db }) => db.user(),
  users: (root, args, { db }) => db.users(),
  categories: (root, args, { db }) => db.categories(),
  post: (root, args, { db }) => db.post(),
  posts: (root, args, { db }) => db.posts(),
  comments: (root, args, { db }) => db.comments()
}

export { Query as default }
