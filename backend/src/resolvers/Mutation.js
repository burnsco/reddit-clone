import {
  BadCredentials,
  NoAuthorization,
  CategoryTitleTaken
} from '../constants'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getUserID, createAccessToken, createRefreshToken } from '../utils'

const Mutation = {
  async createCategory(root, { data }, { db }) {
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

  async createUser(root, { data }, { db }, info) {
    const emailExists = await db.exists.User({ email: data.email }, info)

    if (emailExists) {
      return {
        code: '401',
        success: false,
        message: 'Email is already in use!'
      }
    }

    const password = await bcrypt.hash(data.password, 8)
    const user = await db.mutation.createUser({
      data: {
        username: data.username,
        email: data.email,
        password
      }
    })

    const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET, {
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

  async loginUser(parent, { data }, { db, res }, info) {
    const user = await db.query.user({
      where: {
        email: data.email
      }
    })
    if (!user) {
      return {
        code: '401',
        success: false,
        message: 'User not found!'
      }
    }

    const isValidUser = await bcrypt.compare(data.password, user.password)

    if (!isValidUser) {
      return BadCredentials
    }

    const accessToken = await createAccessToken(user)

    res.cookie('artyu', createRefreshToken(user), { httpOnly: true })

    const { username } = user

    return {
      code: '200',
      success: true,
      message: 'Login Successful',
      accessToken,
      username
    }
  },

  async createPost(root, { data }, { db, user }, info) {
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

  async createComment(root, { data }, { user, db }, info) {
    const postExists = db.exists.Post({ id: data.postID })
    if (!postExists) {
      return {
        code: '401',
        success: true,
        message: 'Post does not exist!'
      }
    }
    if (!user) {
      return {
        code: '401',
        success: false,
        message: 'You are not logged in'
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

  async updateUser(root, args, { db, user }, info) {
    const change = await db.mutation.updateUser({
      data: {
        username: args.username
      },
      where: {
        id: user.id
      }
    })
    return change
  },

  async updatePost(root, args, { db }, info) {
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

  async updateComment(root, args, { db }, info) {
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

  async deleteUser(root, { data }, { db }, info) {
    const result = await db.mutation.deleteUser({ email: data.email })
    return result
  },

  async deletePost(root, { data }, { db }, info) {
    const result = await db.mutation.deletePost({ id: data.postID })
    return result
  },

  async deleteComment(root, { data }, { db }, info) {
    const result = await db.mutation.deleteComment({ id: data.commentID })
    return result
  }
}

export { Mutation as default }
