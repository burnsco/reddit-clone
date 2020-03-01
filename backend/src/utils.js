import jwt from 'jsonwebtoken'

export const getUserID = authorization => {
  let token = authorization.split(' ')[1]
  let user = jwt.verify(token, process.env.JWT_SECRET)
  return user
}
