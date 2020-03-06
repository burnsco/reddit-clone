import { forwardTo } from 'prisma-binding'

const Query = {
  currentUser: async (root, args, { db, user }, info) => {
    const requested = await db.query.user({
      where: {
        id: user.userID
      }
    })
    return requested
  },

  users(parent, args, { db }, info) {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query
          }
        ]
      }
    }

    return db.query.users(opArgs, info)
  },

  // TODO make posts and comments paginated

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

  posts: async (root, args, { db, user }, info) => {
    const opArgs = {}

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

  // can use the default generated methods if you don't need custom queries
  comments: forwardTo('db')
}

export { Query as default }
