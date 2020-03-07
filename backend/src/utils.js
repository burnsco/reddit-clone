import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'

export const getUser = req => {
  let authorization = req.req.headers.authorization

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
    expiresIn: '15m'
  })
}

export const createRefreshToken = user => {
  return jwt.sign({ userID: user.id }, process.env.JWT_REFRESH, {
    expiresIn: '30d'
  })
}
