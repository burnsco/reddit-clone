import { forwardTo } from 'prisma-binding'
import { getUser } from '../utils'
import { AuthenticationError } from 'apollo-server-express'

const Query = {
  currentUser: async (root, args, { db, user }, info) => {
    const requested = await db.query.user({
      where: {
        id: user.userID
      }
    })
    return requested
  },

  users(parent, args, { db, user }, info) {
    return db.query.users(null, info)
  },

  // TODO make posts and comments paginated

  categories: async (root, args, { db, user }, info) => {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        name: args.query
      }
    }

    const results = await db.query.categories(opArgs, info)
    return results
  },

  posts: async (root, args, { db, user }, info) => {
    console.log(user)
    if (!user) {
      throw new AuthenticationError('not logged in')
    }
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after
    }

    if (args.query === 'all') {
      return db.query.posts(null, info)
    }

    if (args.query) {
      opArgs.where = {
        category: {
          name: args.query
        }
      }
    }

    const results = await db.query.posts(opArgs, info)
    return results
  },

  post: (root, args, { db }, info) => db.post(),

  comments: async (root, args, { db, user }, info) => {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after
    }

    if (args.query === 'all') {
      return db.query.comments(null, info)
    }

    if (args.query) {
      opArgs.where = {
        category: {
          name: args.query
        }
      }
    }

    const results = await db.query.comments(opArgs, info)
    return results
  }
}

export { Query as default }
