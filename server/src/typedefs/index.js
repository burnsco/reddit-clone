import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
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
    createUser(data: CreateUserInput): User
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
    role: Role
    email: String!
    username: String!
    friends: [User!]!
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
    comments: [Comment]
    categories: [Category!]!
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

  # FOR POST SUBSCRIPTIONS (CREATE, UPDATE, DELETE)
  type PostSubscriptionPayload {
    mutation: MutationType!
    data: Post!
  }

  # FOR COMMENT SUBSCRIPTIONS (CREATE, UPDATE, DELETE)
  type CommentSubscriptionPayload {
    mutation: MutationType!
    data: Comment!
  }
`
export { typeDefs as default }
