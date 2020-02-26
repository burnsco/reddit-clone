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
    createUser(data: CreateUserInput!): User!
    createPost(data: CreatePostInput!): Post!
    createComment(data: CreateCommentInput!): Comment!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    updatePost(id: ID!, data: UpdatePostInput!): Post!
    updateComment(id: ID!, data: UpdateCommentInput!): Comment!
    deleteUser(id: ID!): User!
    deletePost(id: ID!): Post!
    deleteComment(id: ID!): Comment!
  }

  type Subscription {
    postCreated: Post
    postUpdated: Post
    postDeleted: Post
    commentCreated: Comment
    commentUpdated: Comment
    commentDeleted: Comment
    userCreated: User
    userUpdated: User
    userDeleted: User
  }

  input UpdateCommentInput {
    body: String
  }

  input UpdatePostInput {
    title: String
    category: String
    url: String
  }

  input UpdateUserInput {
    username: String
    email: String
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
