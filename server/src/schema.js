import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    user(userID: String!): User!
    users: [User!]!
    categories: [Category!]!
    post(postID: String!): Post!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type User {
    id: ID
    email: String
    username: String
    comments: [Comment!]!
    posts: [Post!]!
  }

  type Category {
    id: ID!
    title: String!
    subreddit: String!
  }

  type Post {
    id: ID!
    type: String!
    published: Boolean!
    author: User!
    title: String!
    body: String
    url: String!
    comments: [Comment!]!
    category: String!
    votes: Int!
  }

  type Comment {
    id: ID!
    postID: String!
    body: String!
    author: String!
  }
`
