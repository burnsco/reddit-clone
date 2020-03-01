import jwt from 'jsonwebtoken'

export const getUserID = ({ req }) => {
  let authorization = req.req.headers.authorization

  if (authorization) {
    let token = authorization.split(' ')[1]
    let user = jwt.verify(token, process.env.JWT_SECRET)
    return user
  }

  return new AuthenticationError('Not authenticated')
}
