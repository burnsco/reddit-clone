import { v4 as uuidv4 } from 'uuid'

const Mutation = {
  createUser: (_, { ...args }, { db }) => {
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
  deleteUser: (_, { id }, { db }) => {
    const userIndex = db.users.findIndex(u => u.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }
    const deletedUser = db.users.splice(userIndex, 1)
    return deletedUser[0]
  },
  createPost: (_, { ...args }, { db }) => {
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
  deletePost: (_, { id }, { db }) => {
    const postIndex = db.posts.findIndex(p => p.id === id)
    if (postIndex === -1) {
      throw new Error('post does not exist!')
    }
    const deletedPost = db.posts.splice(postIndex, 1)
    return deletedPost[0]
  },
  createComment: (_, { ...args }, { db }) => {
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
