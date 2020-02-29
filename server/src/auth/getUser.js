import { jwt } from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

function getUser({ req }) {
  let tokenWithBearer = req.headers.authorization || ''
  let token = tokenWithBearer.split('')[1]

  try {
    if (token) {
      return jwt.verify(token, 'asdfasdfsdf')
    }
  } catch (ex) {
    return new AuthenticationError('Not authorized')
  }
}

export default getUser
