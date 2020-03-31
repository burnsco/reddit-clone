import {
  BadCredentials,
  NoAuthorization,
  CategoryTitleTaken,
  AlreadyVoted,
  EmailTaken,
  UserDoesNotExist,
  PostDoesNotExist,
  UserNotLoggedIn,
  CommentDoesNotExist
} from '../constants'
import { response } from 'express'
import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import {
  getUserID,
  createAccessToken,
  createRefreshToken,
  sendRefreshToken
} from '../utils'

const Mutation = {
  async logout(root, args, { res, user }, info) {
    const result = await res.clearCookie('redt', process.env.JWT_REFRESH)
    return result
  },
  async createVote(root, { data }, { db, user }, info) {
    const voteExists = await db.exists.Vote({
      user: { id: user.userID },
      post: { id: data.postID }
    })

    if (voteExists) return AlreadyVoted

    const vote = await db.mutation.createVote({
      data: {
        upVote: data.upVote,
        downVote: data.downVote,
        user: { connect: { id: user.userID } },
        post: { connect: { id: data.postID } }
      }
    })

    return {
      code: '200',
      success: true,
      message: 'vote submitted',
      vote
    }
  },

  async createCategory(root, { data, user }, { db }) {
    const categoryExists = await db.exists.Category({ name: data.name })

    if (categoryExists) return CategoryTitleTaken

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

  async createUser(root, { data }, { db, res }, info) {
    const emailExists = await db.exists.User({ email: data.email }, info)

    if (emailExists) return EmailTaken

    const password = await bcrypt.hash(data.password, 8)
    const user = await db.mutation.createUser({
      data: {
        username: data.username,
        email: data.email,
        password
      }
    })

    const accessToken = await createAccessToken(user)

    res.cookie('redt', createRefreshToken(user), { httpOnly: true })

    return {
      code: '200',
      success: true,
      message: 'User was Created',
      user,
      accessToken
    }
  },
  async updateUser(root, { data }, { db, user }, info) {
    const userExists = await db.exists.user({ id: data.userID })

    const change = await db.mutation.updateUser({
      data: {
        username: data.username
      },

      where: {
        id: user.id
      }
    })

    return change
  },
  async deleteUser(root, { data }, { db, user }, info) {
    const userExists = await db.exists.user({ id: data.userID })

    const result = await db.mutation.deleteUser({ email: data.email })
    return result
  },
  async loginUser(parent, { data }, { db, res }, info) {
    const user = await db.query.user({
      where: {
        email: data.email
      }
    })

    if (!user) return UserDoesNotExist

    const isValidUser = await bcrypt.compare(data.password, user.password)

    if (!isValidUser) return BadCredentials

    const accessToken = await createAccessToken(user)

    res.cookie('redt', createRefreshToken(user), { httpOnly: true })

    return {
      code: '200',
      success: true,
      message: 'Login Successful',
      accessToken,
      user
    }
  },

  async createPost(root, { data }, { db, user }, info) {
    if (!user) return NoAuthorization

    const post = await db.mutation.createPost({
      data: {
        title: data.title,
        text: data.text,

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

  async updatePost(root, { data }, { db }, info) {
    const userExists = await db.exists.user({ id: data.userID })

    const postExists = await db.exists.Post({ id: data.postID })

    if (!postExists) {
      return {
        code: '401',
        success: true,
        message: 'Post does not exist!'
      }
    }

    const post = await db.mutation.updatePost({
      data: {
        title: data.title
      },
      where: {
        id: data.postID
      }
    })

    return post
  },
  async deletePost(root, { data }, { db, user }, info) {
    const userExists = await db.exists.User({ id: data.userID })

    const postExists = await db.exists.Post({ id: data.postID })

    const post = await db.mutation.deletePost({
      where: {
        id: data.postID
      }
    })
    return {
      code: '200',
      success: true,
      message: 'Post Deleted',
      post
    }
  },

  async createComment(root, { data }, { user, db }, info) {
    const postExists = db.exists.Post({ id: data.postID })

    if (!postExists) return PostDoesNotExist

    if (!user) return UserNotLoggedIn

    const comment = await db.mutation.createComment({
      data: {
        body: data.body,

        post: {
          connect: {
            id: data.postID
          }
        },

        createdBy: {
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

  async updateComment(root, { data }, { db, user }, info) {
    const userExists = await db.exists.User({ id: user.userID })
    if (!userExists) return UserDoesNotExist

    const postExists = await db.exists.Post({ id: data.postID })
    if (!postExists) return PostDoesNotExist

    const commentExists = await db.exists.Comment({ id: data.commentID })
    if (!commentExists) return CommentDoesNotExist

    const comment = await db.mutation.updateComment({
      data: {
        where: {
          id: data.commentID
        },
        body: data.body
      }
    })

    return {
      code: '200',
      success: true,
      message: 'Comment Updated Successfully!',
      comment
    }
  },
  async deleteComment(root, { data }, { db, user }, info) {
    const commentExists = await db.exists.Comment({
      id: data.commentID
    })

    if (!commentExists) return CommentDoesNotExist

    const result = await db.mutation.deleteComment({
      where: {
        id: data.commentID
      }
    })
    return {
      code: '200',
      success: true,
      message: 'comment deleted'
    }
  }
}

export { Mutation as default }
