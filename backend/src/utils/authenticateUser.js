import { jwt } from 'jsonwebtoken'

const decodedToken = (req, requireAuth = true) => {
  const header = req.req.headers.authorization

  if (header) {
    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  }
  if (requireAuth) {
    throw new Error('Login in to access resource')
  }
  return null
}

export default decodedToken
