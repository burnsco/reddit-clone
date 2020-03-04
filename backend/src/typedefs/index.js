import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    currentUser: User!
    categories: [Category!]!
    users: [User!]!
    comments: [Comment!]!
    posts: [Post!]!
    user(userID: ID!): User!
    post(postID: ID!): Post!
  }

  type Mutation {
    createUser(data: CreateUserInput!): CreateUserMutationResponse!
    loginUser(data: LoginUserInput!): LoginUserMutationResponse!
    createCategory(data: CreateCategoryInput!): CreateCategoryMutationResponse!
    createPost(data: CreatePostInput!): CreatePostMutationResponse!
    createComment(data: CreateCommentInput!): CreateCommentMutationResponse!
    updateUser(data: UpdateUserInput!): UpdateUserMutationResponse!
    updatePost(data: UpdatePostInput!): UpdatePostMutationResponse!
    updateComment(data: UpdateCommentInput!): UpdateCommentMutationResponse!
    deleteUser(id: ID!): DeleteUserMutationResponse!
    deletePost(id: ID!): DeletePostMutationResponse!
    deleteComment(id: ID!): DeleteCommentMutationResponse!
  }

  type Category {
    updatedAt: String!
    createdAt: String!
    id: ID!
    title: String!
    posts: [Post!]!
  }

  type Post {
    updatedAt: String!
    createdAt: String!
    id: ID!
    category: Category!
    title: String!
    url: String!
    author: User!
    comments: [Comment!]!
  }

  type User {
    id: ID!
    updatedAt: String!
    createdAt: String!
    email: String!
    username: String!
    password: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    updatedAt: String!
    createdAt: String!
    body: String!
    author: User!
  }

  input CreatePostInput {
    title: String!
    url: String!
  }

  input CreateCommentInput {
    body: String!
  }

  input CreateCategoryInput {
    title: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  input UpdateCommentInput {
    body: String
  }

  input UpdatePostInput {
    title: String
    url: String
  }

  input UpdateUserInput {
    password: String
    username: String
    email: String
  }

  input CreateUserInput {
    username: String!
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

  type DeleteCommentMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    comment: Comment
    user: User
  }

  type DeletePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
    user: User
  }

  type DeleteUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type UpdateCommentMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    comment: Comment
    user: User
  }

  type UpdatePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
    user: User
  }

  type UpdateUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type CreateCommentMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    comment: Comment
    user: User
  }

  type CreateCategoryMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    category: Category
  }

  type CreatePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
    post: Post
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    node: Post
  }

  type CommentSubscriptionPayload {
    mutation: MutationType!
    node: Comment
  }

  type Subscription {
    post: PostSubscriptionPayload!
    comment(postID: ID!): CommentSubscriptionPayload!
  }

  enum Role {
    USER
    ADMIN
    MODERATOR
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }
`
export { typeDefs as default }
