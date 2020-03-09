import { forwardTo } from 'prisma-binding'
import { getUser } from '../utils'
import { AuthenticationError } from 'apollo-server-express'

const Query = {
  currentUser: async (root, args, { db, user }, info) => {
    if (!user.userID) {
      throw new Error('no user logged in')
    }
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

  post: async (root, args, { db, user }, info) => {
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
