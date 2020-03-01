import { jwt } from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

const getUser = ({ token }) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET)
    }
    return null
  } catch (err) {
    console.log(err)
  }
}

export default getUser