import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    users: [User!]!
    categories: [Category!]!
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
    published: Boolean!
    author: User!
    title: String!
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
