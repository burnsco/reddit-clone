import { v4 as uuidv4 } from 'uuid'

const Mutation = {
  createUser: (_, args, { db }) => {
    if (db.users.some(u => u.email === args.email)) {
      throw new Error('Email taken.')
    }
    const user = {
      id: uuidv4(),
      ...args.data
    }
    db.users.push(user)
    return user
  },

  // FIXME refactor this at some point, looks messy!
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
    const deletedUser = db.users.splice(userIndex, 1)
    return deletedUser[0]
  },
  createPost: (_, args, { db }) => {
    const post = {
      id: uuidv4(),
      type: 'link',
      published: true,
      votes: Math.floor(Math.random() * Math.floor(100)),
      ...args.data
    }
    db.posts.push(post)
    return post
  },

  updatePost: (_, { id, data }, { db }) => {
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
    return post
  },

  deletePost: (_, { id }, { db }) => {
    const postIndex = db.posts.findIndex(p => p.id === id)
    if (postIndex === -1) {
      throw new Error('post does not exist!')
    }
    const deletedPost = db.posts.splice(postIndex, 1)
    return deletedPost[0]
  },
  createComment: (_, args, { db }) => {
    const comment = {
      id: uuidv4(),
      ...args.data
    }
    db.comments.push(comment)
    return comment
  },
  deleteComment: (_, { id }, { db }) => {
    const commentIndex = db.comments.findIndex(c => c.id === id)
    if (commentIndex === -1) {
      throw new Error('comment does not exist!')
    }
    const deletedComment = db.comments.splice(commentIndex, 1)
    return deletedComment[0]
  }
}

export { Mutation as default }
