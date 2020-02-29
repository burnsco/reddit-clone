import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    currentUser: User!
    categories: [Category!]!
    users: [User!]!
    posts: [Post!]!
    comments: [Comment!]!

    user(userID: ID!): User!
    post(postID: ID!): Post!

    commentsForPost(postID: ID!): [Comment!]!

    postsByUser(userID: ID!): Post!
    commentsByUser(userID: ID!): Comment!
  }

  type Mutation {
    createUser(data: CreateUserInput!): CreateUserMutationResponse!
    loginUser(data: LoginUserInput!): LoginUserMutationResponse!
    createPost(data: CreatePostInput!): Post!
    createComment(data: CreateCommentInput!): Comment!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    updatePost(id: ID!, data: UpdatePostInput!): Post!
    updateComment(id: ID!, data: UpdateCommentInput!): Comment!
    deleteUser(id: ID!): User!
    deletePost(id: ID!): Post!
    deleteComment(id: ID!): Comment!
  }
  input LoginUserInput {
    email: String!
    password: String!
  }
  type LoginUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    token: String
    user: User
  }
  type CreateUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
    token: String
  }
  type PostSubscriptionPayload {
    mutation: MutationType!
    node: Post
  }

  type CommentSubscriptionPayload {
    mutation: MutationType!
    node: Comment
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Subscription {
    post: PostSubscriptionPayload!
    comment(postID: ID!): CommentSubscriptionPayload!
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
    password: String!
  }

  input CreatePostInput {
    title: String!
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
    password: String
    likedPosts: [ID!]!
    posts: [Post!]!
    comments: [Comment!]!
  }
  type Category {
    id: ID!
    title: String!
    posts: [Post!]!
  }
  type Post {
    id: ID!
    type: String!
    author: User!
    title: String!
    body: String
    url: String!
    comments: [Comment!]!
    category: [Category!]!
    votes: Int!
  }
  type Comment {
    id: ID!
    body: String!
    author: User!
    post: Post!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }
  enum Role {
    ADMIN
    USER
    MODERATOR
  }
`
export { typeDefs as default }
