import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'

export const getUser = ({ req }) => {
  let authorization = req.headers.authorization

  if (authorization) {
    try {
      let token = authorization.split(' ')[1]
      let user = jwt.verify(token, process.env.JWT_SECRET)
      return user
    } catch (ex) {
      throw new AuthenticationError(ex)
    }
  }
  if (!authorization) {
    return new AuthenticationError('Not authenticated')
  }
}

export const createAccessToken = user => {
  return jwt.sign({ userID: user.id }, process.env.JWT_SECRET, {
    expiresIn: '300m'
  })
}

export const createRefreshToken = user => {
  return jwt.sign({ userID: user.id }, process.env.JWT_REFRESH, {
    expiresIn: '21d'
  })
}

export const sendRefreshToken = (res, token) => {
  res.cookie('rdt', token, {
    httpOnly: true,
    path: '/refresh_token'
  })
}
