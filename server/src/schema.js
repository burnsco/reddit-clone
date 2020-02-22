import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    feed(category: String): [Post!]!
    categories: [Category!]!
  }

  type Category {
    id: ID!
    title: String!
    subreddit: String!
  }

  type Post {
    id: ID
    published: Boolean
    author: User!
    title: String!
    url: String!
    comments: Int
    category: String!
    votes: Int
  }

  type Comment {
    id: ID
    body: String
    author: String
    created: String
    votes: Int
  }

  type User {
    id: ID
    email: String
    username: String
  }

  type Mutation {
    post(
      url: String!
      title: String!
      category: String!
      author: String!
    ): Post!
  }
`
