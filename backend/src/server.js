import { ApolloServer, PubSub } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import http from 'http'
import morgan from 'morgan'
import jwt from 'jsonwebtoken'
import typeDefs from './schema.graphql'
import { makeExecutableSchema } from 'graphql-tools'
import db from './context/index'
import resolvers from './resolvers/root'
import subscriptions from './subscriptions/index'
import {
  getUser,
  createAccessToken,
  sendRefreshToken,
  createRefreshToken
} from './utils'
import cookieParser from 'cookie-parser'
require('dotenv').config()

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(cookieParser())

app.post('/refresh_token', cors(corsOptions), async (req, res) => {
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
  await sendRefreshToken(res, createRefreshToken(user))

  return res.send({ ok: true, accessToken: createAccessToken(user) })
})

const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
})

const pubsub = new PubSub()

const server = new ApolloServer({
  schema,
  context: async ({ req, res, connection }) => {
    if (connection) {
      return {
        ...connection.context,
        db
      }
    }

    return {
      ...req,
      ...res,
      pubsub,
      user: await getUser(req),
      db
    }
  },
  subscriptions: {
    path: '/subscriptions',
    onConnect: async (connectionParams, webSocket, context) => {
      console.log(
        `Subscription client connected using Apollo server's built-in SubscriptionServer.`
      )
    },
    onDisconnect: async (webSocket, context) => {
      console.log(`Subscription client disconnected.`)
    }
  }
})

server.applyMiddleware({ app, cors: corsOptions })

const PORT = 4000

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
