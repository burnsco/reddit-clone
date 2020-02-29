// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

const Mutation = {
  createUser: async (root, { data }, { db }) =>
    await db.createUser({ ...data }),
  createPost: async (root, { data }, { db }) =>
    await db.createPost({ ...data }),
  createComment: async (root, { data }, { db }) =>
    await db.createComment({ ...data }),

  updateUser: async (root, args, { db }) =>
    await db.updateUser({
      data: {
        role: 'ADMIN'
      },
      where: {
        id: args.id
      }
    }),
  updatePost: async (root, args, { db }) =>
    await db.updatePost({
      data: {
        title: args.title
      },
      where: {
        id: args.id
      }
    }),
  updateComment: async (root, args, { db }) =>
    await db.updateComment({
      data: {
        title: args.title
      },
      where: {
        id: args.id
      }
    }),

  deleteUser: async (root, { email }, { db }) =>
    await db.deleteUser({ email: email }),
  deletePost: async (root, { id }, { db }) => await db.deletePost({ id: id }),
  deleteComment: async (root, { id }, { db }) =>
    await db.deleteComment({ id: id })
}

export { Mutation as default }
