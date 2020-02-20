import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Chat {
    id: ID!
    content: String!
    from: String!
    createdAt: String!
  }
  type Query {
    posts: [Post]
    feed(category: String): [Post!]!
    categories: [Category!]!
    chats: [Chat]
  }

  type Category {
    id: ID!
    title: String!
    subreddit: String!
  }

  type Mutation {
    addPost(url: String, title: String, category: String, author: String): Post
    post(
      url: String!
      title: String!
      category: String!
      author: String!
    ): Post!
  }

  type Subscription {
    postAdded: Post
  }

  type Post {
    id: ID
    created: String
    type: String
    author: String!
    title: String!
    url: String!
    views: Int
    comments: Int
    category: String!
    votes: Int
  }

  type Comment {
    id: ID
    body: String
    author: String
    created: String
    comments: Comment
    votes: Int
  }

  type User {
    id: ID
    email: String
    username: String
  }
`
