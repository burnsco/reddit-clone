import { ApolloServer, PubSub } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import http from 'http'
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
const PORT = 4000
const path = '/graphql'
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions))
app.use(cookieParser())

app.post('/refresh_token', async (req, res) => {
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
  res.cookie('redt', token, {
    httpOnly: true,
    path: '/refresh_token'
  })

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

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  )
})

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )
