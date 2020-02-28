import { PubSub } from 'apollo-server'
import { prisma } from '../generated/prisma-client'

const pubsub = new PubSub()

const context = {
  prisma,
  pubsub
}

export { context as default }
