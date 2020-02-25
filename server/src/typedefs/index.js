import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    user(userID: String!): User!
    users: [User!]!
    categories: [Category!]!
    post(postID: String!): Post!
    posts(category: String): [Post!]!
    comments: [Comment!]!
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    deleteUser(id: ID!): User
    createPost(data: CreatePostInput): Post!
    deletePost(id: ID!): Post
    createComment(data: CreateCommentInput): Comment!
    deleteComment(id: ID!): Comment
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  input CreatePostInput {
    title: String!
    category: String!
    author: String!
    url: String!
  }

  input CreateCommentInput {
    body: String!
    author: String!
    postID: ID!
  }

  type User {
    id: ID!
    email: String
    username: String
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

export { typeDefs as default }
