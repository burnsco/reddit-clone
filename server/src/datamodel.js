import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Post {
    id: ID! @id
    createdAt: DateTime! @createdAt
    updatedAt: DateTime! @updatedAt
    title: String!
    published: Boolean!
    author: User!
  }

  type User {
    id: ID! @id
    name: String
    email: String! @unique
    accessRole: AccessRole!
    posts: [Post!]!
  }

  type Comment {
    id: ID! @id
    createdAt: DateTime! @createdAt
    text: String!
    writtenBy: User!
  }

  enum AccessRole {
    USER
    ADMIN
  }
`
