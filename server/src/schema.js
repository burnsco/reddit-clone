import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    users: [User!]!
    categories: [Category!]!
    posts: [Post!]!
    post(postID: String!): Post!
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
