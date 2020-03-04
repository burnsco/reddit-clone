const Query = {
  currentUser: async (root, args, { db }, info) => {
    const requested = await db.user({ id: user.userID })
    return requested
  },

  user: (root, args, { db }, info) => db.user(),

  users: async (root, args, { db }, info) => {
    const results = await db.users()
    return results
  },

  categories: async (root, args, { db }, info) => {
    const results = await db.categories()
    return results
  },

  posts: async (root, args, { db }, info) => {
    const results = await db.posts()
    return results
  },

  post: (root, args, { db }, info) => db.post(),

  comments: (root, args, { db }, info) => db.comments()
}

export { Query as default }
