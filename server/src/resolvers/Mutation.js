import { v4 as uuidv4 } from 'uuid'
import { POST } from '../constants'

const Mutation = {
  createUser: (_, { data }, { db }) => {
    if (db.users.some(u => u.email === data.email)) {
      throw new Error('Email taken.')
    }

    const user = {
      id: uuidv4(),
      ...data
    }

    db.users.push(user)

    return user
  },

  updateUser: (parent, { id, data }, { db }, info) => {
    const user = db.users.find(u => u.id === id)

    if (!user) {
      throw new Error('User not Found!')
    }

    if (typeof data.email === 'string') {
      const emailTaken = db.users.some(u => u.email === data.email)

      if (user.username === data.username) {
        throw new Error('You are already using that username!')
      }

      if (user.email === data.email) {
        throw new Error('You already are using that e-mail!')
      }

      if (emailTaken) {
        throw new Error('Email already in use!')
      }

      user.email = data.email
    }

    if (typeof data.username === 'string') {
      user.username = data.username
    }
    return user
  },

  deleteUser: (_, { id }, { db }) => {
    const userIndex = db.users.findIndex(u => u.id === id)

    if (userIndex === -1) {
      throw new Error('User not found')
    }

    const [user] = db.users.splice(userIndex, 1)

    return user
  },

  createPost: (_, { data }, { db, pubsub }) => {
    const userIndex = db.users.findIndex(u => u.username === data.author)
    if (userIndex === -1) {
      throw new Error('User not found')
    }

    const post = {
      id: uuidv4(),
      type: 'link',
      published: true,
      votes: Math.floor(Math.random() * Math.floor(100)),
      ...data
    }

    pubsub.publish(POST, {
      post: {
        mutation: 'CREATED',
        data: post
      }
    })

    db.posts.push(post)
    return post
  },

  updatePost: (_, { id, data }, { db, pubsub }) => {
    const post = db.posts.find(p => p.id === id)

    if (!post) {
      throw new Error('Post not found!')
    }
    if (typeof data.title === 'string') {
      post.title = data.title
    }

    if (typeof data.category === 'string') {
      post.category = data.category
    }

    if (typeof data.url === 'string') {
      post.url = data.url
    }

    pubsub.publish(POST, {
      post: {
        mutation: 'UPDATED',
        data: post
      }
    })

    return post
  },

  deletePost: (_, { id }, { db, pubsub }) => {
    const postIndex = db.posts.findIndex(p => p.id === id)

    if (postIndex === -1) {
      throw new Error('post does not exist!')
    }

    const [post] = db.posts.splice(postIndex, 1)

    pubsub.publish(POST, {
      post: {
        mutation: 'DELETED',
        data: post
      }
    })

    return post
  },

  createComment: (_, { data }, { db, pubsub }, info) => {
    const userExists = db.users.some(u => u.username === data.author)
    const postExists = db.posts.some(p => p.id === data.postID)
    if (!userExists) {
      throw new Error('user does not exist!')
    }
    if (!postExists) {
      throw new Error('post does not exist!')
    }

    const comment = {
      id: uuidv4(),
      ...data
    }

    pubsub.publish('COMMENT', {
      comment: {
        mutation: 'CREATED',
        data: comment
      }
    })
    db.comments.push(comment)

    return comment
  },

  updateComment: (_, { id, args }, { db, pubsub }) => {
    const comment = db.comments.find(c => c.id === id)
    if (!comment) {
      throw new Error('Comment not found!')
    }

    if (typeof args.comment === 'string') {
      comment.body = args.body
    }

    pubsub.publish('COMMENT', {
      comment: {
        mutation: 'UPDATED',
        data: comment
      }
    })

    return comment
  },
  deleteComment: (_, { id }, { db, pubsub }) => {
    const commentIndex = db.comments.findIndex(c => c.id === id)
    if (commentIndex === -1) {
      throw new Error('comment does not exist!')
    }

    const [comment] = db.comments.splice(commentIndex, 1)

    pubsub.publish('COMMENT', {
      comment: {
        mutation: 'DELETED',
        data: comment
      }
    })

    return comment
  }
}

export { Mutation as default }
