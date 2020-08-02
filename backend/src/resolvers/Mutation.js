/* eslint-disable no-console */
import bcrypt from "bcryptjs"
import {
  BadCredentials,
  NoAuthorization,
  CategoryTitleTaken,
  EmailTaken,
  UserDoesNotExist,
  PostDoesNotExist,
  UserNotLoggedIn,
  CategoryDoesNotExist,
  CommentDoesNotExist,
  CommentDeleted,
  PostDeleted,
  CategoryWasDeleted
} from "../constants"
import { createAccessToken, createRefreshToken } from "../utils"

const Mutation = {
  async createVote(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

    const postExists = db.exists.Post({ id: data.postID })
    if (!postExists) return PostDoesNotExist

    let post = await db.query.post({
      where: {
        id: data.postID
      }
    })

    console.log("post before")
    console.log(post)

    if (!data.voteID) {
      const vote = await db.mutation.createVote({
        data: {
          type: data.type,

          post: {
            connect: {
              id: data.postID
            }
          },

          user: {
            connect: {
              id: user.userID
            }
          }
        }
      })
      // data.type = type of vote (+1/-1)
      const newScore = data.type + post.score
      console.log("in the new vote section")
      await db.mutation.updatePost({
        where: {
          id: data.postID
        },
        data: {
          score: newScore
        }
      })
      post = await db.query.post({
        where: {
          id: data.postID
        }
      })
      console.log("post after (new vote)")
      console.log(post)
      return {
        code: "200",
        success: true,
        message: "vote submitted",
        vote,
        post
      }
    }

    if (data.voteID) {
      console.log("beginnign of already voted section")
      // The user already voted, so update vote type and post score
      let vote = await db.query.vote({
        where: {
          id: data.voteID
        }
      })
      console.log("vote ? ")
      console.log(vote)
      const storedVoteType = vote.type

      // USER CLICKS UPVOTE \\
      if (data.type === 1) {
        // if the previous vote was an upvote
        if (storedVoteType === 1) {
          // cancelling out the upvote so subtract 1
          const updatedScore = post.score - 1
          await db.mutation.updatePost({
            where: {
              id: data.postID
            },
            data: {
              score: updatedScore
            }
          })
          // at square one, so just delete the vote
          await db.mutation.deleteVote({
            where: {
              id: data.voteID
            }
          })
          post = await db.query.post({
            where: {
              id: data.postID
            }
          })
          vote = await db.query.vote({
            where: {
              id: data.voteID
            }
          })
          console.log("post after")
          console.log(post)
          return {
            code: "200",
            success: true,
            message: "score adjusted and vote reset",
            post,
            vote
          }
        }

        // previous vote is downvote (-1)
        if (storedVoteType === -1) {
          const newScore = post.score + 2

          await db.mutation.updatePost({
            where: {
              id: data.postID
            },
            data: {
              score: newScore
            }
          })
          await db.mutation.updateVote({
            where: {
              id: data.voteID
            },
            data: {
              type: data.type
            }
          })
          post = await db.query.post({
            where: {
              id: data.postID
            }
          })
          vote = await db.query.vote({
            where: {
              id: data.voteID
            }
          })
          console.log("post after")
          console.log(post)
          return {
            code: "200",
            success: true,
            message: "score adjusted and vote submitted",
            vote,
            post
          }
        }
      }

      // USER CLICKS DONWVOTE  \\
      if (data.type === -1) {
        // if the previous vote was an downvote
        if (storedVoteType === -1) {
          // cancelling out the downvote so add 1
          const updatedScore = post.score + 1
          await db.mutation.updatePost({
            where: {
              id: data.postID
            },
            data: {
              score: updatedScore
            }
          })
          // back to even so delete the vote
          await db.mutation.deleteVote({
            where: {
              id: data.voteID
            }
          })
          post = await db.query.post({
            where: {
              id: data.postID
            }
          })
          console.log("post after")
          console.log(post)
          return {
            code: "200",
            success: true,
            message: "score adjusted and vote reset",
            post
          }
        }

        // previous vote is upvote (+1)
        if (storedVoteType === 1) {
          const newScore = post.score - 2

          await db.mutation.updatePost({
            where: {
              id: data.postID
            },
            data: {
              score: newScore
            }
          })
          await db.mutation.updateVote({
            where: {
              id: data.voteID
            },
            data: {
              type: data.type
            }
          })
          post = await db.query.post({
            where: {
              id: data.postID
            }
          })
          vote = await db.query.vote({
            where: {
              id: data.voteID
            }
          })
          console.log("post after")
          console.log(post)
          return {
            code: "200",
            success: true,
            message: "score adjusted and vote reset",
            vote,
            post
          }
        }
      }
    }
    post = await db.query.post({
      where: {
        id: data.postID
      }
    })
    return {
      code: "401",
      success: false,
      message: "end of object error",
      post
    }
  },

  async createCategory(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

    const categoryExists = await db.exists.Category({ name: data.name })

    if (categoryExists) return CategoryTitleTaken

    const category = await db.mutation.createCategory({
      data: {
        name: data.name
      }
    })
    return {
      code: "200",
      success: true,
      message: `subreddit Created!`,
      category
    }
  },
  async updateCategory(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

    const categoryExists = await db.exists.Category({ id: data.categoryID })
    if (!categoryExists) return CategoryDoesNotExist

    const category = await db.mutation.updateCategory({
      data: {
        name: data.name
      },
      where: {
        id: data.categoryID
      }
    })
    return {
      code: "200",
      success: true,
      message: "Category Updated!",
      category
    }
  },
  async deleteCategory(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

    const categoryExists = await db.exists.Category({
      id: data.categoryID
    })

    if (!categoryExists) return CategoryDoesNotExist

    await db.mutation.deleteCategory({
      where: {
        id: data.categoryID
      }
    })
    return CategoryWasDeleted
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
    res.cookie("redt", createRefreshToken(user), { httpOnly: true })
    return {
      code: "200",
      success: true,
      message: "User was Created",
      user,
      accessToken
    }
  },
  async updateUser(root, { data }, { db, user }, info) {
    if (!user) return NoAuthorization
    const editedUser = await db.mutation.updateUser(
      {
        where: {
          id: user.id
        },
        data: {
          ...data
        }
      },
      info
    )
    return {
      code: "200",
      success: true,
      message: "user updated",
      user: editedUser
    }
  },
  async deleteUser(root, { data }, { db, user }, info) {
    if (!user) return NoAuthorization

    const deletedUser = await db.mutation.deleteUser(
      {
        where: {
          id: data.userID
        }
      },
      info
    )
    return {
      code: "200",
      success: true,
      message: "user deleted",
      user: deletedUser
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

    res.cookie("redt", createRefreshToken(user), { httpOnly: true })

    return {
      code: "200",
      success: true,
      message: "Login Successful",
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
      code: "200",
      success: true,
      message: "Post Created Successfully",
      post
    }
  },
  async updatePost(root, { data }, { db }) {
    const postExists = await db.exists.Post({ id: data.postID })

    if (!postExists) return PostDoesNotExist

    const post = await db.mutation.updatePost({
      data: {
        title: data.title,
        text: data.text
      },
      where: {
        id: data.postID
      }
    })
    return {
      code: "200",
      success: true,
      message: "Message Updated.",
      post
    }
  },
  async deletePost(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

    const postExists = await db.exists.Post({
      id: data.postID
    })
    if (!postExists) return PostDoesNotExist

    await db.mutation.deletePost({
      where: {
        id: data.postID
      }
    })
    return PostDeleted
  },

  async createComment(root, { data }, { user, db }) {
    if (!user) return UserNotLoggedIn

    const postExists = db.exists.Post({ id: data.postID })

    if (!postExists) return PostDoesNotExist

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
      code: "200",
      success: true,
      message: "Comment Created Successfully!",
      comment
    }
  },
  async updateComment(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

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
      code: "200",
      success: true,
      message: "Comment Updated Successfully!",
      comment
    }
  },
  async deleteComment(root, { data }, { db, user }) {
    if (!user) return NoAuthorization

    const commentExists = await db.exists.Comment({
      id: data.commentID
    })

    if (!commentExists) return CommentDoesNotExist

    await db.mutation.deleteComment({
      where: {
        id: data.commentID
      }
    })
    return CommentDeleted
  }
}

export { Mutation as default }
