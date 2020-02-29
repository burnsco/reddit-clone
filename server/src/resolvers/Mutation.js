import { BadCredentials } from '../constants'

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Mutation = {
  createUser: async (root, { data }, { db }) => {
    const password = bcrypt.hashSync(data.password, 8)
    const user = await db.createUser({
      password,
      username: data.username,
      email: data.email
    })

    return {
      code: '200',
      success: true,
      message: 'User was Created',
      user
    }
  },

  loginUser: async (root, { data }, { db }) => {
    const user = await db.user({ email: data.email })
    const hashed = await bcrypt.compareSync(data.password, user.password)

    if (!hashed || !user) {
      return BadCredentials
    }

    const token = await jwt.sign({ userID: user.id }, 'asdfasdfsdf', {
      expiresIn: '30min'
    })

    return {
      code: '200',
      success: true,
      message: 'Login Successful',
      token,
      user
    }
  },

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
