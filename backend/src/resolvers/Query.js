
const Query = {
  currentUser: async (root, args, { db, user }) => {
    if (!user.userID) {
      throw new Error('User Not Authenticated.')
    }
    const requested = await db.query.user({
      where: {
        id: user.userID
      }
    })
    return requested
  },

  user: async (root, args, { db }, info) => {
    const result = await db.query.user(
      {
        where: {
          id: args.userID
        }
      },
      info
    )
    return result
  },
  users: async (parent, args, { db }, info) => {
    const results = await db.query.users(null, info)
    return results
  },

  chatRooms: async (parent, args, { db }, info) => {
    const results = await db.query.chatRooms(null, info)
    return results
  },
  chatMessages: async (parent, args, { db }, info) => {
    const results = await db.query.chatMessages(
      {
        where: {
          chat: {
            id: args.chatID
          }
        }
      },
      info
    )
    return results
  },

  categories: async (root, args, { db }, info) => {
    const results = await db.query.categories(null, info)
    return results
  },

  posts: async (root, args, { db }, info) => {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }
    if (args.query === "all") {
      const results = await db.query.posts(null, info)
      return results
    }
    if (args.query) {
      opArgs.where = {
        category: {
          name: args.query
        }
      }
    }
    if (args.userID) {
      opArgs.where = {
        author: {
          id: args.userID
        }
      }
    }
    const results = await db.query.posts(opArgs, info)
    return results
  },

  post: async (root, args, { db }, info) => {
    const result = await db.query.post(
      {
        where: {
          id: args.postID
        }
      },
      info
    )
    return result
  },

  comments: async (root, args, { db }, info) => {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }
    if (args.query === "all") {
      const results = db.query.comments(null, info)
      return results
    }
    if (args.userID) {
      opArgs.where = {
        createdBy: {
          id: args.userID
        }
      }
    }
    const results = await db.query.comments(opArgs, info)
    return results
  }
}

export { Query as default }
