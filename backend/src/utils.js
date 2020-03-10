import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'

export const getUser = ({ checkToken }) => {
  if (checkToken) {
    try {
      let token = checkToken.split(' ')[1]
      let user = jwt.verify(token, process.env.JWT_SECRET)
      return user
    } catch (ex) {
      throw new AuthenticationError(ex)
    }
  }
  if (!checkToken) {
    return new AuthenticationError('Not authenticated')
  }
}

export const createAccessToken = user => {
  return jwt.sign(
    { userID: user.id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: '300m'
    }
  )
}

export const createRefreshToken = user => {
  return jwt.sign(
    { userID: user.id, username: user.username },
    process.env.JWT_REFRESH,
    {
      expiresIn: '21d'
    }
  )
}
