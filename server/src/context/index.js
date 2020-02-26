import db from '../db/'
import { PubSub } from 'apollo-server'

const pubsub = new PubSub()

const context = {
  db,
  pubsub
}

export { context as default }
