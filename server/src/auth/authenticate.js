import { AuthenticationError } from 'apollo-server'
import { jwt } from 'jsonwebtoken'

const authenticate = async (resolve, root, args, context, info) => {
  let token
  try {
    token = jwt.verify(context.req.get('Authorization'), 'asdfasdfsdf')
  } catch (e) {
    return new AuthenticationError('Not authorized')
  }
  context.claims = token.claims
  const result = await resolve(root, args, context, info)
  return result
}

export default authenticate
