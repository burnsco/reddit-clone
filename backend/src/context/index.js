import { Prisma } from "prisma-binding"

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "https://prisma-container.herokuapp.com"
})

export default db
