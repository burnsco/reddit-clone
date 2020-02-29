const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Mutation = {
  createUser: async (root, { data }, { db }) => {
    // create encrypted (hashed) version of the password for storage
    const password = await bcrypt.hashSync(data.password, 8)

    const user = await db.createUser({
      password,
      username: data.username,
      email: data.email
    })

    // create a jsonwebtoken (encrypted) for the user, using the hashed
    // password as a password
    const token = await jwt.sign({ userID: data.id }, data.password)

    return {
      code: '200',
      success: true,
      message: 'User was Created',
      user,
      token
    }
  },
  // create user ==> bcrypt the password and store it ==> send back token

  loginUser: async (root, { data }, { db }) => {
    // retreive stored user from database
    const user = await db.user({ email: data.email })
    // check if the hashed password matches the password the user sent
    const hashed = bcrypt.compareSync(data.password, user.password)
    if (!hashed) {
      return {
        code: '401',
        success: false,
        message: 'Bad Credentials'
      }
    }
    const token = await jwt.sign({ userID: data.id }, data.password)
    return {
      code: '200',
      success: true,
      message: 'Login Successful',
      token,
      user
    }
  },

  createPost: async (root, { data }, { db }) =>
    await db.createPost({ ...data }),
  createComment: async (root, { data }, { db }) =>
    await db.createComment({ ...data }),

  updateUser: async (root, args, { db }) =>
    await db.updateUser({
      data: {
        role: 'ADMIN'
      },
      where: {
        id: args.id
      }
    }),
  updatePost: async (root, args, { db }) =>
    await db.updatePost({
      data: {
        title: args.title
      },
      where: {
        id: args.id
      }
    }),
  updateComment: async (root, args, { db }) =>
    await db.updateComment({
      data: {
        title: args.title
      },
      where: {
        id: args.id
      }
    }),
  deleteUser: async (root, { email }, { db }) =>
    await db.deleteUser({ email: email }),
  deletePost: async (root, { id }, { db }) => await db.deletePost({ id: id }),
  deleteComment: async (root, { id }, { db }) =>
    await db.deleteComment({ id: id })
}

export { Mutation as default }
