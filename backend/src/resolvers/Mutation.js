import { BadCredentials, NoAuthorization } from '../constants'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getUserID } from '../utils'

const Mutation = {
  createCategory: async (root, { data }, { db }) => {
    let category = { ...data }
    db.createCategory({
      ...data
    })

    return {
      code: '200',
      success: true,
      message: 'Category was Created!',
      category
    }
  },

  createUser: async (root, { data }, { db }) => {
    const password = bcrypt.hashSync(data.password, 8)

    const user = await db.createUser({
      password,
      username: data.username,
      email: data.email
    })

    const token = jwt.sign(
      { userID: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    )

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

    const token = jwt.sign(
      { userID: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    )

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
          id: user.userID
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
        id: args.postID
      }
    })
  },

  updateUser: async (root, args, { db, req }) =>
    await db.updateUser({
      data: {
        role: 'ADMIN'
      },
      where: {
        id: args.userID
      }
    }),

  updatePost: async (root, args, { db }) =>
    await db.updatePost({
      data: {
        title: args.title
      },
      where: {
        id: args.postID
      }
    }),

  updateComment: async (root, args, { db }) =>
    await db.updateComment({
      data: {
        title: args.title
      },
      where: {
        id: args.commentID
      }
    }),

  deleteUser: async (root, { data }, { db }) =>
    await db.deleteUser({ email: data.email }),

  deletePost: async (root, { data }, { db }) =>
    await db.deletePost({ id: data.postID }),

  deleteComment: async (root, { data }, { db }) =>
    await db.deleteComment({ id: data.commentID })
}

export { Mutation as default }
