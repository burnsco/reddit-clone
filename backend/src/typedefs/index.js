import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    currentUser: User!
    categories(query: String): [Category!]!
    posts(
      query: String
      first: Int
      skip: Int
      after: String
      orderBy: PostOrderByInput
    ): [Post!]!
    morePosts(query: String, first: Int, skip: Int, after: String): [Post!]!
    comments(
      query: String
      first: Int
      skip: Int
      after: String
      orderBy: CommentOrderByInput
    ): [Comment!]!
    users(query: String, first: Int, skip: Int, after: String): [User!]!
    post(postID: ID!): Post!
    node(id: ID!): Node
  }

  type Mutation {
    logout: Boolean!
    vote(
      postID: ID!
      upVote: Boolean!
      downVote: Boolean!
    ): CreateVoteMutationResponse!
    createUser(data: CreateUserInput!): CreateUserMutationResponse!
    loginUser(data: LoginUserInput!): LoginUserMutationResponse!
    createCategory(data: CreateCategoryInput!): CreateCategoryMutationResponse!
    createPost(data: CreatePostInput): CreatePostMutationResponse!
    createComment(data: CreateCommentInput): CreateCommentMutationResponse!
    updateUser(data: UpdateUserInput!): UpdateUserMutationResponse!
    updatePost(id: ID!, data: UpdatePostInput!): UpdatePostMutationResponse!
    updateComment(
      id: ID!
      data: UpdateCommentInput!
    ): UpdateCommentMutationResponse!
    deleteUser(id: ID!): DeleteUserMutationResponse!
    deletePost(id: ID!): DeletePostMutationResponse!
    deleteComment(id: ID!): DeleteCommentMutationResponse!
  }

  interface Node {
    id: ID!
  }

  type Category implements Node {
    updatedAt: String!
    createdAt: String!
    id: ID!
    name: String!
    posts: [Post!]!
  }

  type Post implements Node {
    updatedAt: String!
    createdAt: String!
    id: ID!
    category: Category!
    title: String!
    text: String
    author: User!
    comments: [Comment!]!
    votes: [Vote!]!
  }

  type User implements Node {
    id: ID!
    updatedAt: String!
    createdAt: String!
    email: String!
    username: String!
    password: String!
    posts: [Post!]!
    comments: [Comment!]!
    votes: [Vote!]!
  }

  type Vote implements Node {
    id: ID!
    post: Post!
    user: User!
    upVote: Boolean!
    downVote: Boolean!
  }

  type Comment implements Node {
    id: ID!
    updatedAt: String!
    createdAt: String!
    body: String!
    post: Post!
    author: User!
  }

  input UpdatePostInput {
    title: String
    url: String
  }

  input CreatePostInput {
    categoryID: ID
    author: ID
    title: String!
    text: String
  }

  input CreateCommentInput {
    postID: ID
    author: ID
    body: String!
  }

  input CreateCategoryInput {
    name: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  input UpdateCommentInput {
    body: String
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
    accessToken: String
    user: User
  }

  type CreateVoteMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type CreateUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    accessToken: String
    user: User
  }

  type DeleteCommentMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    comment: Comment
  }

  type DeletePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
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
  }

  type UpdatePostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post
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
    post: Post
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type PostSubscriptionPayload {
    mutation: MutationType
    node: Post
  }

  type CommentSubscriptionPayload {
    mutation: MutationType
    node: Comment
  }

  type Subscription {
    postAdded(postID: ID, categoryID: ID): PostSubscriptionPayload
    commentAdded(postID: ID): CommentSubscriptionPayload
  }

  enum PostOrderByInput {
    id_ASC
    id_DESC
    description_ASC
    description_DESC
    url_ASC
    url_DESC
    updatedAt_ASC
    updatedAt_DESC
    createdAt_ASC
    createdAt_DESC
  }

  enum CommentOrderByInput {
    id_ASC
    id_DESC
    description_ASC
    description_DESC
    url_ASC
    url_DESC
    updatedAt_ASC
    updatedAt_DESC
    createdAt_ASC
    createdAt_DESC
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
    UPVOTE
    DOWNVOTE
  }
`
export { typeDefs as default }
