import { ApolloServer, PubSub } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typedefs/index'
import db from './context/index'
import resolvers from './resolvers/root'
import { getUser, createAccessToken } from './utils'
import { applyMiddleware } from 'graphql-middleware'
import cookieParser from 'cookie-parser'
require('dotenv').config()

const app = express()
const path = '/'
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions))
app.use(cookieParser())

app.post('/refresh_token', async (req, res) => {
  console.log('request')
  console.log(req.cookies)
  const token = req.cookies.redt

  if (!token) {
    return res.send({ ok: false, accessToken: '' })
  }

  let payload = null

  try {
    payload = jwt.verify(token, process.env.JWT_REFRESH)
  } catch (error) {
    console.log(error)
    return res.send({ ok: false, accessToken: '' })
  }

  const user = await db.query.user({
    where: {
      id: payload.userID
    }
  })

  if (!user) {
    return res.send({ ok: false, accessToken: '' })
  }
  sendRefreshToken(res, createRefreshToken(user))

  return res.send({ ok: true, accessToken: createAccessToken(user) })
})

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
)

const pubsub = new PubSub()

const server = new ApolloServer({
  schema,
  context: async (req, res) => ({
    ...req,
    ...res,
    pubsub,
    user: getUser(req),
    db
  })
})

server.applyMiddleware({ app, path, cors: false })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
