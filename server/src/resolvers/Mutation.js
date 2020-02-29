// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

const Mutation = {
  createUser: (root, { data }, { db }) => db.createUser({ ...data }),
  createPost: (root, { data }, { db }) => db.createPost({ ...data }),
  createComment: (root, { data }, { db }) => db.createComment({ ...data }),

  updateUser: (root, args, { db }) => {},
  updatePost: (root, args, { db }) => {},
  updateComment: (root, args, { db }) => {},

  deleteUser: (root, args, { db }) => {},
  deletePost: (root, args, { db }) => {},
  deleteComment: (root, args, { db }) => {}
}

export { Mutation as default }
