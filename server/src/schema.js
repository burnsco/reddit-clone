import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    user(userID: String!): User!
    users: [User!]!
    categories: [Category!]!
    post(postID: String!): Post!
    posts(category: String): [Post!]!
    comments: [Comment!]!
  }

  type Mutation {
    createUser(email: String!, username: String!): User!
    createPost(
      title: String!
      category: String!
      author: String!
      url: String!
    ): Post!
    createComment(body: String!, author: String!, postID: ID!): Comment!
  }

  type User {
    id: ID!
    email: String!
    username: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Category {
    id: ID!
    title: String!
    subreddit: String!
  }

  type Post {
    id: ID!
    type: String!
    published: Boolean
    author: User!
    title: String!
    body: String
    url: String!
    comments: [Comment]
    category: String!
    votes: Int
  }

  type Comment {
    id: ID!
    postID: String!
    body: String!
    author: User!
  }
`
