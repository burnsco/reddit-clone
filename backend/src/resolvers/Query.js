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

  categories: async (root, args, { db }, info) => {
    const results = await db.query.categories(null, info)
    return results
  },

  posts: async (root, args, { db, user }, info) => {
    console.log(user)
    const results = await db.query.posts(null, info)
    return results
  },

  post: (root, args, { db }, info) => db.post(),

  // can use the default generated methods if you don't need custom queries
  comments: forwardTo('db')
}

export { Query as default }
