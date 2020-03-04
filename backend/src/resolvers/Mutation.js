import {
  BadCredentials,
  NoAuthorization,
  CategoryTitleTaken
} from '../constants'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getUserID } from '../utils'

const Mutation = {
  createCategory: async (root, { data }, { db }) => {
    const categoryExists = await db.exists.Category({ name: data.name })

    if (categoryExists) {
      return CategoryTitleTaken
    }

    let category = await db.mutation.createCategory({
      data: {
        name: data.name
      }
    })

    return {
      code: '200',
      success: true,
      message: `${data.name} subreddit Created!`,
      category
    }
  },

  createUser: async (root, { data }, { db }, info) => {
    const emailExists = await db.exists.User({ email: data.email })

    if (emailExists) {
      return {
        code: '401',
        success: false,
        message: 'Email is already in use!'
      }
    }

    const password = bcrypt.hashSync(data.password, 8)
    const user = await db.mutation.createUser({
      data: {
        password,
        username: data.username,
        email: data.email
      }
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

  loginUser: async (root, args, { db }, info) => {
    const user = await db.query.user({
      where: {
        email: args.data.email
      }
    })
    console.log(user)
    const hashed = await bcrypt.compare(args.data.password, user.password)

    if (!hashed || !user) {
      return BadCredentials
    }

    const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET, {
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

    const post = await db.mutation.createPost({
      data: {
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
      }
    })

    return {
      code: '200',
      success: true,
      message: 'Post Created Successfully',
      post
    }
  },

  createComment: async (root, { data }, { user, db }, info) => {
    const postExists = db.exists.Post({ id: data.postID })
    if (!postExists) {
      return {
        code: '401',
        success: true,
        message: 'Post does not exist!'
      }
    }

    const comment = await db.mutation.createComment({
      data: {
        body: data.body,
        post: {
          connect: {
            id: data.postID
          }
        },
        author: {
          connect: {
            id: user.userID
          }
        }
      }
    })

    return {
      code: '200',
      success: true,
      message: 'Comment Created Successfully!',
      comment
    }
  },

  updateUser: async (root, args, { db, req }, info) => {
    const user = await db.mutation.updateUser({
      data: {
        role: 'ADMIN'
      },
      where: {
        id: args.userID
      }
    })
    return user
  },

  updatePost: async (root, args, { db }, info) => {
    const postExists = db.exists.Post({ id: data.postID })
    if (!postExists) {
      return {
        code: '401',
        success: true,
        message: 'Post does not exist!'
      }
    }

    const post = await db.mutation.updatePost({
      data: {
        title: args.title
      },
      where: {
        id: args.postID
      }
    })
    return post
  },

  updateComment: async (root, args, { db }, info) => {
    await db.mutation.updateComment({
      data: {
        title: args.title
      },
      where: {
        id: args.commentID
      }
    })
    return comment
  },

  deleteUser: async (root, { data }, { db }, info) =>
    await db.mutation.deleteUser({ email: data.email }),

  deletePost: async (root, { data }, { db }, info) =>
    await db.mutation.deletePost({ id: data.postID }),

  deleteComment: async (root, { data }, { db }, info) =>
    await db.mutation.deleteComment({ id: data.commentID })
}

export { Mutation as default }
