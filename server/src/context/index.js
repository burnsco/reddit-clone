import { PubSub } from 'apollo-server'
import { prisma as db } from '../generated/prisma-client'

const pubsub = new PubSub()

const context = {
  db,
  pubsub
}

export { context as default }
