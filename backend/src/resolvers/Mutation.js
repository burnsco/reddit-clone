/* eslint-disable no-console */
import bcrypt from 'bcryptjs'
import {
  BadCredentials,
  NoAuthorization,
  CategoryTitleTaken,
  EmailTaken,
  UserDoesNotExist,
  PostDoesNotExist,
  UserNotLoggedIn,
  CommentDoesNotExist
} from '../constants'
import { createAccessToken, createRefreshToken } from '../utils'

const Mutation = {
  async createVote(root, { data }, { db, user }, info) {
    const userVoted = await db.exists.Vote(
      {
        user: { id: user.userID },
        post: { id: data.postID }
      },
      info
    )

    if (!userVoted) {
      const vote = await db.mutation.createVote({
        data: {
          upVote: data.upVote,
          downVote: data.downVote,
          user: { connect: { id: user.userID } },
          post: { connect: { id: data.postID } }
        }
      })
      // updatescore
      const post = await db.exists.Post({ where: { id: data.postID } }, info)
      const score = await db.mutation.updatePost({})
      return {
        code: '200',
        success: true,
        message: 'vote submitted',
        vote,
        post,
        score
      }
    }

    if (userVoted) {
      const vote = await db.mutation.updateVote({
        data: {
          upVote: data.upVote,
          downVote: data.downVote,
          where: {
            post: { id: data.postID }
          }
        }
      })
      // updatescore
      const post = await db.exists.Post({ where: { id: data.postID } }, info)
      const score = await db.mutation.updatePost({})
      return {
        code: '200',
        success: true,
        message: 'vote submitted',
        vote,
        score,
        post
      }
    }

    return NoAuthorization
  },

  async createCategory(root, { data }, { db }) {
    const categoryExists = await db.exists.Category({ name: data.name })

    if (categoryExists) return CategoryTitleTaken

    const category = await db.mutation.createCategory({
      data: {
        name: data.name
      }
    })

    return {
      code: '200',
      success: true,
      message: `subreddit Created!`,
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

  async loginUser(parent, { data }, { db, res }) {
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

  async createPost(root, { data }, { db, user }) {
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

  async updatePost(root, { data }, { db }) {
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

  async createComment(root, { data }, { user, db }) {
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

  async updateComment(root, { data }, { db, user }) {
    const userExists = await db.exists.User({ id: user.userID })

    if (!userExists) return UserDoesNotExist

    const postExists = await db.exists.Post({ id: data.postID })
    if (!postExists) return PostDoesNotExist

    const commentExists = await db.exists.Comment({
      id: data.commentID,
      createdBy: {
        id: user.id
      }
    })

    if (!commentExists) return CommentDoesNotExist

    const comment = await db.mutation.updateComment({
      where: {
        id: data.commentID
      },
      data: {
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

  async deleteComment(root, { data }, { db }) {
    const commentExists = await db.exists.Comment({
      id: data.commentID
    })

    if (!commentExists) return CommentDoesNotExist

    await db.mutation.deleteComment({
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
