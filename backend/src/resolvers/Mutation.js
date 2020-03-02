import { BadCredentials, NoAuthorization } from '../constants'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getUserID } from '../utils'

const Mutation = {
  createCategory: async (root, { data }, { db }) =>
    db.createCategory({
      ...data
    }),

  createUser: async (root, { data }, { db }) => {
    const password = bcrypt.hashSync(data.password, 8)

    const user = await db.createUser({
      password,
      username: data.username,
      email: data.email
    })

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    })

    return {
      code: '200',
      success: true,
      message: 'User was Created',
      user,
      token
    }
  },

  loginUser: async (root, { data }, { db }) => {
    const user = await db.user({ email: data.email })
    const hashed = await bcrypt.compare(data.password, user.password)

    if (!hashed || !user) {
      return BadCredentials
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    })

    return {
      code: '200',
      success: true,
      message: 'Login Successful',
      token,
      user
    }
  },

  createPost: async (root, { data }, { db, user }, info) => {
    if (!user) {
      return NoAuthorization
    }

    const post = await db.createPost({
      title: data.title,
      url: data.url,
      category: {
        connect: {
          id: data.categoryID
        }
      },
      author: {
        connect: {
          id: user.userId
        }
      }
    })

    return {
      code: '200',
      success: true,
      message: 'Post Created Successfully',
      post
    }
  },

  createComment: async (root, args, { user, db }) => {
    db.createComment({
      data: {
        ...args
      },
      where: {
        id: args.postId
      }
    })
  },

  updateUser: async (root, args, { db, req }) =>
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
