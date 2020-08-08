import { AuthenticationError } from "apollo-server-express"

const Query = {
  currentUser: async (root, args, { db, user }) => {
    if (!user.userID) {
      throw new AuthenticationError("no user logged in")
    }
    const requested = await db.query.user({
      where: {
        id: user.userID
      }
    })
    return requested
  },
  users(parent, args, { db }, info) {
    return db.query.users(null, info)
  },
  categories: async (root, args, { db }, info) => {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        name: args.query
      }
    }
    const results = await db.query.categories(opArgs, info)
    return results
  },

  category: async (root, args, { db }, info) => {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        name: args.query
      }
    }

    const results = await db.query.category(opArgs, info)
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
      return db.query.posts(null, info)
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
    const post = await db.query.post(
      {
        where: {
          id: args.postID
        }
      },
      info
    )
    return post
  },

  comment: async (root, args, { db }, info) => {
    const comment = await db.query.comment(
      {
        where: {
          id: args.commentID
        }
      },
      info
    )
    return comment
  },

  comments: async (root, args, { db }, info) => {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }
    if (args.query === "all") {
      return db.query.comments(null, info)
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
