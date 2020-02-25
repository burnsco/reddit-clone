import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Comment
}

export { resolvers as default }
