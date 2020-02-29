import { prisma as db } from '../generated/prisma-client'

function context() {
  return {
    db
  }
}

export { context as default }
