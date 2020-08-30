import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  user: User;
  users: Array<User>;
  categories: Array<Category>;
  post: Post;
  posts: Array<Post>;
  chatRooms: Array<ChatRoom>;
  chatMessages: Array<ChatMessage>;
  comments: Array<Comment>;
  node?: Maybe<Node>;
};


export type QueryUserArgs = {
  userID: Scalars['ID'];
};


export type QueryPostArgs = {
  postID: Scalars['ID'];
};


export type QueryPostsArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  userID?: Maybe<Scalars['ID']>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<PostOrderByInput>;
};


export type QueryChatMessagesArgs = {
  chatID?: Maybe<Scalars['ID']>;
};


export type QueryCommentsArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  userID?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<CommentOrderByInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  role: Role;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  chatMessages: Array<ChatMessage>;
  password: Scalars['String'];
  posts: Array<Post>;
  comments: Array<Comment>;
  votes: Array<Vote>;
};

export type Node = {
  id: Scalars['ID'];
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
  Moderator = 'MODERATOR'
}

export type ChatMessage = Node & {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  chat: ChatRoom;
  sentBy: User;
  text: Scalars['String'];
};

export type ChatRoom = Node & {
  __typename?: 'ChatRoom';
  id: Scalars['ID'];
  category: Category;
  createdAt: Scalars['String'];
  messages: Array<ChatMessage>;
};

export type Category = Node & {
  __typename?: 'Category';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
  chatRoom: Array<ChatRoom>;
};

export type Post = Node & {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  category: Category;
  text?: Maybe<Scalars['String']>;
  score: Scalars['Int'];
  author: User;
  comments: Array<Comment>;
  votes: Array<Vote>;
};

export type Comment = Node & {
  __typename?: 'Comment';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  createdBy: User;
  body: Scalars['String'];
  post: Post;
};

export type Vote = Node & {
  __typename?: 'Vote';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  type?: Maybe<Scalars['Int']>;
  post?: Maybe<Post>;
};

export enum PostOrderByInput {
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export enum CommentOrderByInput {
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createChatRoom: CreateChatRoomMutationResponse;
  createChatMessage: CreateChatMessageMutationResponse;
  createVote: CreateVoteMutationResponse;
  createCategory: CreateCategoryMutationResponse;
  updateCategory: UpdateCategoryMutationResponse;
  deleteCategory: DeleteCategoryMutationResponse;
  createUser: CreateUserMutationResponse;
  updateUser: UpdateUserMutationResponse;
  deleteUser: DeleteUserMutationResponse;
  loginUser: LoginUserMutationResponse;
  createPost: CreatePostMutationResponse;
  updatePost: UpdatePostMutationResponse;
  deletePost: DeletePostMutationResponse;
  createComment: CreateCommentMutationResponse;
  updateComment: UpdateCommentMutationResponse;
  deleteComment: DeleteCommentMutationResponse;
};


export type MutationCreateChatRoomArgs = {
  data: CreateChatRoomInput;
};


export type MutationCreateChatMessageArgs = {
  data: CreateChatMessageInput;
};


export type MutationCreateVoteArgs = {
  data: CreateVoteInput;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  data: DeleteCategoryInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  data: DeleteUserInput;
};


export type MutationLoginUserArgs = {
  data: LoginUserInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
};


export type MutationDeletePostArgs = {
  data: DeletePostInput;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  data: UpdateCommentInput;
};


export type MutationDeleteCommentArgs = {
  data: DeleteCommentInput;
};

/** # CHAT ### */
export type CreateChatRoomInput = {
  categoryID: Scalars['ID'];
};

/** CHAT  */
export type CreateChatRoomMutationResponse = MutationResponse & {
  __typename?: 'CreateChatRoomMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  chatroom: ChatRoom;
};

/** MUTATION RESPONSE */
export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type CreateChatMessageInput = {
  text: Scalars['String'];
  chatID: Scalars['ID'];
};

export type CreateChatMessageMutationResponse = MutationResponse & {
  __typename?: 'CreateChatMessageMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  chatmessage: ChatMessage;
};

/** ## VOTE ### */
export type CreateVoteInput = {
  postID: Scalars['ID'];
  voteID?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['Int']>;
};

/** # VOTING */
export type CreateVoteMutationResponse = MutationResponse & {
  __typename?: 'CreateVoteMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  vote?: Maybe<Vote>;
};

/** SUBREDDITS */
export type CreateCategoryInput = {
  name: Scalars['String'];
};

/** # SUBREDDITS */
export type CreateCategoryMutationResponse = MutationResponse & {
  __typename?: 'CreateCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category: Category;
};

export type UpdateCategoryInput = {
  name: Scalars['String'];
  categoryID: Scalars['ID'];
};

export type UpdateCategoryMutationResponse = MutationResponse & {
  __typename?: 'UpdateCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

export type DeleteCategoryInput = {
  categoryID: Scalars['ID'];
};

export type DeleteCategoryMutationResponse = MutationResponse & {
  __typename?: 'DeleteCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

/** USERS */
export type CreateUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

/** # USERS */
export type CreateUserMutationResponse = MutationResponse & {
  __typename?: 'CreateUserMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UpdateUserInput = {
  userID: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UpdateUserMutationResponse = MutationResponse & {
  __typename?: 'UpdateUserMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export type DeleteUserInput = {
  userID: Scalars['ID'];
};

export type DeleteUserMutationResponse = MutationResponse & {
  __typename?: 'DeleteUserMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserMutationResponse = MutationResponse & {
  __typename?: 'LoginUserMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** POSTS */
export type CreatePostInput = {
  categoryID: Scalars['ID'];
  title: Scalars['String'];
  text?: Maybe<Scalars['String']>;
};

/** # POSTS */
export type CreatePostMutationResponse = MutationResponse & {
  __typename?: 'CreatePostMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  post: Post;
};

export type UpdatePostInput = {
  postID: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePostMutationResponse = MutationResponse & {
  __typename?: 'UpdatePostMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  post: Post;
};

export type DeletePostInput = {
  postID: Scalars['ID'];
};

export type DeletePostMutationResponse = MutationResponse & {
  __typename?: 'DeletePostMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

/** COMMENTS */
export type CreateCommentInput = {
  postID: Scalars['ID'];
  body: Scalars['String'];
};

/** # COMMENTS */
export type CreateCommentMutationResponse = MutationResponse & {
  __typename?: 'CreateCommentMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  comment: Comment;
};

export type UpdateCommentInput = {
  postID: Scalars['ID'];
  commentID: Scalars['ID'];
  body: Scalars['String'];
};

export type UpdateCommentMutationResponse = MutationResponse & {
  __typename?: 'UpdateCommentMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  comment: Comment;
};

export type DeleteCommentInput = {
  postID: Scalars['ID'];
  commentID: Scalars['ID'];
};

export type DeleteCommentMutationResponse = MutationResponse & {
  __typename?: 'DeleteCommentMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  comment: Comment;
};

export type Subscription = {
  __typename?: 'Subscription';
  postAdded?: Maybe<PostSubscriptionPayload>;
  commentAdded?: Maybe<CommentSubscriptionPayload>;
  voteAdded?: Maybe<VoteSubscriptionPayload>;
  chatMessageAdded?: Maybe<ChatSubscriptionPayload>;
};


export type SubscriptionPostAddedArgs = {
  postID?: Maybe<Scalars['ID']>;
  categoryID?: Maybe<Scalars['ID']>;
};


export type SubscriptionCommentAddedArgs = {
  postID?: Maybe<Scalars['ID']>;
};


export type SubscriptionVoteAddedArgs = {
  postID?: Maybe<Scalars['ID']>;
};


export type SubscriptionChatMessageAddedArgs = {
  chatID?: Maybe<Scalars['ID']>;
};

/** ## SUBSCRIPTIONS */
export type PostSubscriptionPayload = {
  __typename?: 'PostSubscriptionPayload';
  mutation?: Maybe<MutationType>;
  node?: Maybe<Post>;
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type CommentSubscriptionPayload = {
  __typename?: 'CommentSubscriptionPayload';
  mutation?: Maybe<MutationType>;
  node?: Maybe<Comment>;
};

export type VoteSubscriptionPayload = {
  __typename?: 'VoteSubscriptionPayload';
  mutation?: Maybe<MutationType>;
  node?: Maybe<Vote>;
};

export type ChatSubscriptionPayload = {
  __typename?: 'ChatSubscriptionPayload';
  mutation?: Maybe<MutationType>;
  node?: Maybe<ChatMessage>;
};

export type CategoryDetailsFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name'>
);

export type CommentDetailsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'body' | 'createdAt' | 'updatedAt'>
);

export type PostDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'score' | 'title' | 'text'>
);

export type UserDetailsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type VoteDetailsFragment = (
  { __typename?: 'Vote' }
  & Pick<Vote, 'id' | 'type'>
);

export type CastVoteMutationVariables = Exact<{
  postID: Scalars['ID'];
  voteID?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['Int']>;
}>;


export type CastVoteMutation = (
  { __typename?: 'Mutation' }
  & { createVote: (
    { __typename?: 'CreateVoteMutationResponse' }
    & Pick<CreateVoteMutationResponse, 'success' | 'message' | 'code'>
  ) }
);

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory: (
    { __typename?: 'CreateCategoryMutationResponse' }
    & Pick<CreateCategoryMutationResponse, 'code' | 'success' | 'message'>
    & { category: (
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    ) }
  ) }
);

export type CreateChatMessageMutationVariables = Exact<{
  text: Scalars['String'];
  chatID: Scalars['ID'];
}>;


export type CreateChatMessageMutation = (
  { __typename?: 'Mutation' }
  & { createChatMessage: (
    { __typename?: 'CreateChatMessageMutationResponse' }
    & Pick<CreateChatMessageMutationResponse, 'code' | 'success' | 'message'>
    & { chatmessage: (
      { __typename?: 'ChatMessage' }
      & Pick<ChatMessage, 'id' | 'createdAt' | 'text'>
    ) }
  ) }
);

export type CreateChatRoomMutationVariables = Exact<{
  categoryID: Scalars['ID'];
}>;


export type CreateChatRoomMutation = (
  { __typename?: 'Mutation' }
  & { createChatRoom: (
    { __typename?: 'CreateChatRoomMutationResponse' }
    & Pick<CreateChatRoomMutationResponse, 'code' | 'message' | 'success'>
    & { chatroom: (
      { __typename?: 'ChatRoom' }
      & Pick<ChatRoom, 'id'>
    ) }
  ) }
);

export type CreateCommentMutationVariables = Exact<{
  body: Scalars['String'];
  postID: Scalars['ID'];
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'CreateCommentMutationResponse' }
    & Pick<CreateCommentMutationResponse, 'code' | 'success' | 'message'>
    & { comment: (
      { __typename?: 'Comment' }
      & CommentDetailsFragment
    ) }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  text: Scalars['String'];
  categoryID: Scalars['ID'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'CreatePostMutationResponse' }
    & Pick<CreatePostMutationResponse, 'code' | 'success' | 'message'>
    & { post: (
      { __typename?: 'Post' }
      & PostDetailsFragment
    ) }
  ) }
);

export type DeleteCommentMutationVariables = Exact<{
  postID: Scalars['ID'];
  commentID: Scalars['ID'];
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment: (
    { __typename?: 'DeleteCommentMutationResponse' }
    & Pick<DeleteCommentMutationResponse, 'code' | 'message' | 'success'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'LoginUserMutationResponse' }
    & Pick<LoginUserMutationResponse, 'success' | 'message' | 'code' | 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserDetailsFragment
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'CreateUserMutationResponse' }
    & Pick<CreateUserMutationResponse, 'message' | 'code' | 'success' | 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserDetailsFragment
    )> }
  ) }
);

export type UpdateCommentMutationVariables = Exact<{
  postID: Scalars['ID'];
  commentID: Scalars['ID'];
  body: Scalars['String'];
}>;


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateComment: (
    { __typename?: 'UpdateCommentMutationResponse' }
    & Pick<UpdateCommentMutationResponse, 'code' | 'message' | 'success'>
    & { comment: (
      { __typename?: 'Comment' }
      & CommentDetailsFragment
    ) }
  ) }
);

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & { votes: Array<(
      { __typename?: 'Vote' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & UserDetailsFragment
      )> }
      & VoteDetailsFragment
    )>, comments: Array<(
      { __typename?: 'Comment' }
      & { createdBy: (
        { __typename?: 'User' }
        & UserDetailsFragment
      ) }
      & CommentDetailsFragment
    )>, author: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ), category: (
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    ) }
    & PostDetailsFragment
  )> }
);

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & CategoryDetailsFragment
  )> }
);

export type PostsByCategoryQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type PostsByCategoryQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & { votes: Array<(
      { __typename?: 'Vote' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & UserDetailsFragment
      )> }
      & VoteDetailsFragment
    )>, comments: Array<(
      { __typename?: 'Comment' }
      & { createdBy: (
        { __typename?: 'User' }
        & UserDetailsFragment
      ) }
      & CommentDetailsFragment
    )>, author: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ), category: (
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    ) }
    & PostDetailsFragment
  )> }
);

export type ChatRoomMessagesQueryVariables = Exact<{
  chatID?: Maybe<Scalars['ID']>;
}>;


export type ChatRoomMessagesQuery = (
  { __typename?: 'Query' }
  & { chatMessages: Array<(
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'id' | 'text' | 'createdAt'>
    & { sentBy: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )> }
);

export type ChatRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChatRoomsQuery = (
  { __typename?: 'Query' }
  & { chatRooms: Array<(
    { __typename?: 'ChatRoom' }
    & Pick<ChatRoom, 'id'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    ) }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: (
    { __typename?: 'User' }
    & UserDetailsFragment
  ) }
);

export type PostAndCommentsQueryVariables = Exact<{
  postID: Scalars['ID'];
}>;


export type PostAndCommentsQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & { votes: Array<(
      { __typename?: 'Vote' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & UserDetailsFragment
      )> }
      & VoteDetailsFragment
    )>, comments: Array<(
      { __typename?: 'Comment' }
      & { createdBy: (
        { __typename?: 'User' }
        & UserDetailsFragment
      ) }
      & CommentDetailsFragment
    )>, author: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ), category: (
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    ) }
    & PostDetailsFragment
  ) }
);

export type CommentsForPostQueryVariables = Exact<{
  postID: Scalars['ID'];
}>;


export type CommentsForPostQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & { comments: Array<(
      { __typename?: 'Comment' }
      & { createdBy: (
        { __typename?: 'User' }
        & UserDetailsFragment
      ) }
      & CommentDetailsFragment
    )> }
  ) }
);

export type UserCommentsQueryVariables = Exact<{
  userID?: Maybe<Scalars['ID']>;
}>;


export type UserCommentsQuery = (
  { __typename?: 'Query' }
  & { comments: Array<(
    { __typename?: 'Comment' }
    & { createdBy: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ) }
    & CommentDetailsFragment
  )> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserDetailsFragment
  )> }
);

export type NewChatMessageSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewChatMessageSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { chatMessageAdded?: Maybe<(
    { __typename?: 'ChatSubscriptionPayload' }
    & { node?: Maybe<(
      { __typename?: 'ChatMessage' }
      & Pick<ChatMessage, 'id' | 'createdAt' | 'text'>
      & { sentBy: (
        { __typename?: 'User' }
        & Pick<User, 'username'>
      ) }
    )> }
  )> }
);

export const CategoryDetailsFragmentDoc = gql`
    fragment CategoryDetails on Category {
  id
  name
}
    `;
export const CommentDetailsFragmentDoc = gql`
    fragment CommentDetails on Comment {
  id
  body
  createdAt
  updatedAt
}
    `;
export const PostDetailsFragmentDoc = gql`
    fragment PostDetails on Post {
  id
  createdAt
  updatedAt
  score
  title
  text
}
    `;
export const UserDetailsFragmentDoc = gql`
    fragment UserDetails on User {
  id
  username
}
    `;
export const VoteDetailsFragmentDoc = gql`
    fragment VoteDetails on Vote {
  id
  type
}
    `;
export const CastVoteDocument = gql`
    mutation CastVote($postID: ID!, $voteID: ID, $type: Int) {
  createVote(data: {postID: $postID, voteID: $voteID, type: $type}) {
    success
    message
    code
  }
}
    `;
export type CastVoteMutationFn = Apollo.MutationFunction<CastVoteMutation, CastVoteMutationVariables>;

/**
 * __useCastVoteMutation__
 *
 * To run a mutation, you first call `useCastVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCastVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [castVoteMutation, { data, loading, error }] = useCastVoteMutation({
 *   variables: {
 *      postID: // value for 'postID'
 *      voteID: // value for 'voteID'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCastVoteMutation(baseOptions?: Apollo.MutationHookOptions<CastVoteMutation, CastVoteMutationVariables>) {
        return Apollo.useMutation<CastVoteMutation, CastVoteMutationVariables>(CastVoteDocument, baseOptions);
      }
export type CastVoteMutationHookResult = ReturnType<typeof useCastVoteMutation>;
export type CastVoteMutationResult = Apollo.MutationResult<CastVoteMutation>;
export type CastVoteMutationOptions = Apollo.BaseMutationOptions<CastVoteMutation, CastVoteMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($name: String!) {
  createCategory(data: {name: $name}) {
    code
    success
    message
    category {
      ...CategoryDetails
    }
  }
}
    ${CategoryDetailsFragmentDoc}`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, baseOptions);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateChatMessageDocument = gql`
    mutation CreateChatMessage($text: String!, $chatID: ID!) {
  createChatMessage(data: {text: $text, chatID: $chatID}) {
    code
    success
    message
    chatmessage {
      id
      createdAt
      text
    }
  }
}
    `;
export type CreateChatMessageMutationFn = Apollo.MutationFunction<CreateChatMessageMutation, CreateChatMessageMutationVariables>;

/**
 * __useCreateChatMessageMutation__
 *
 * To run a mutation, you first call `useCreateChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMessageMutation, { data, loading, error }] = useCreateChatMessageMutation({
 *   variables: {
 *      text: // value for 'text'
 *      chatID: // value for 'chatID'
 *   },
 * });
 */
export function useCreateChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMessageMutation, CreateChatMessageMutationVariables>) {
        return Apollo.useMutation<CreateChatMessageMutation, CreateChatMessageMutationVariables>(CreateChatMessageDocument, baseOptions);
      }
export type CreateChatMessageMutationHookResult = ReturnType<typeof useCreateChatMessageMutation>;
export type CreateChatMessageMutationResult = Apollo.MutationResult<CreateChatMessageMutation>;
export type CreateChatMessageMutationOptions = Apollo.BaseMutationOptions<CreateChatMessageMutation, CreateChatMessageMutationVariables>;
export const CreateChatRoomDocument = gql`
    mutation CreateChatRoom($categoryID: ID!) {
  createChatRoom(data: {categoryID: $categoryID}) {
    code
    message
    success
    chatroom {
      id
    }
  }
}
    `;
export type CreateChatRoomMutationFn = Apollo.MutationFunction<CreateChatRoomMutation, CreateChatRoomMutationVariables>;

/**
 * __useCreateChatRoomMutation__
 *
 * To run a mutation, you first call `useCreateChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatRoomMutation, { data, loading, error }] = useCreateChatRoomMutation({
 *   variables: {
 *      categoryID: // value for 'categoryID'
 *   },
 * });
 */
export function useCreateChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatRoomMutation, CreateChatRoomMutationVariables>) {
        return Apollo.useMutation<CreateChatRoomMutation, CreateChatRoomMutationVariables>(CreateChatRoomDocument, baseOptions);
      }
export type CreateChatRoomMutationHookResult = ReturnType<typeof useCreateChatRoomMutation>;
export type CreateChatRoomMutationResult = Apollo.MutationResult<CreateChatRoomMutation>;
export type CreateChatRoomMutationOptions = Apollo.BaseMutationOptions<CreateChatRoomMutation, CreateChatRoomMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($body: String!, $postID: ID!) {
  createComment(data: {body: $body, postID: $postID}) {
    code
    success
    message
    comment {
      ...CommentDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}`;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      body: // value for 'body'
 *      postID: // value for 'postID'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $text: String!, $categoryID: ID!) {
  createPost(data: {title: $title, text: $text, categoryID: $categoryID}) {
    code
    success
    message
    post {
      ...PostDetails
    }
  }
}
    ${PostDetailsFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      text: // value for 'text'
 *      categoryID: // value for 'categoryID'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($postID: ID!, $commentID: ID!) {
  deleteComment(data: {postID: $postID, commentID: $commentID}) {
    code
    message
    success
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      postID: // value for 'postID'
 *      commentID: // value for 'commentID'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, baseOptions);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  loginUser(data: {email: $email, password: $password}) {
    success
    message
    code
    accessToken
    user {
      ...UserDetails
    }
  }
}
    ${UserDetailsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!) {
  createUser(data: {email: $email, username: $username, password: $password}) {
    message
    code
    success
    accessToken
    user {
      ...UserDetails
    }
  }
}
    ${UserDetailsFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation UpdateComment($postID: ID!, $commentID: ID!, $body: String!) {
  updateComment(data: {postID: $postID, commentID: $commentID, body: $body}) {
    code
    message
    success
    code
    message
    success
    comment {
      ...CommentDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}`;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      postID: // value for 'postID'
 *      commentID: // value for 'commentID'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, baseOptions);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const AllPostsDocument = gql`
    query AllPosts {
  posts {
    ...PostDetails
    votes {
      ...VoteDetails
      user {
        ...UserDetails
      }
    }
    comments {
      ...CommentDetails
      createdBy {
        ...UserDetails
      }
    }
    author {
      ...UserDetails
    }
    category {
      ...CategoryDetails
    }
  }
}
    ${PostDetailsFragmentDoc}
${VoteDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const AllCategoriesDocument = gql`
    query AllCategories {
  categories {
    ...CategoryDetails
  }
}
    ${CategoryDetailsFragmentDoc}`;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, baseOptions);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, baseOptions);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const PostsByCategoryDocument = gql`
    query PostsByCategory($query: String!) {
  posts(query: $query) {
    ...PostDetails
    votes {
      ...VoteDetails
      user {
        ...UserDetails
      }
    }
    comments {
      ...CommentDetails
      createdBy {
        ...UserDetails
      }
    }
    author {
      ...UserDetails
    }
    category {
      ...CategoryDetails
    }
  }
}
    ${PostDetailsFragmentDoc}
${VoteDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;

/**
 * __usePostsByCategoryQuery__
 *
 * To run a query within a React component, call `usePostsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByCategoryQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function usePostsByCategoryQuery(baseOptions?: Apollo.QueryHookOptions<PostsByCategoryQuery, PostsByCategoryQueryVariables>) {
        return Apollo.useQuery<PostsByCategoryQuery, PostsByCategoryQueryVariables>(PostsByCategoryDocument, baseOptions);
      }
export function usePostsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByCategoryQuery, PostsByCategoryQueryVariables>) {
          return Apollo.useLazyQuery<PostsByCategoryQuery, PostsByCategoryQueryVariables>(PostsByCategoryDocument, baseOptions);
        }
export type PostsByCategoryQueryHookResult = ReturnType<typeof usePostsByCategoryQuery>;
export type PostsByCategoryLazyQueryHookResult = ReturnType<typeof usePostsByCategoryLazyQuery>;
export type PostsByCategoryQueryResult = Apollo.QueryResult<PostsByCategoryQuery, PostsByCategoryQueryVariables>;
export const ChatRoomMessagesDocument = gql`
    query ChatRoomMessages($chatID: ID) {
  chatMessages(chatID: $chatID) {
    id
    text
    createdAt
    sentBy {
      username
    }
  }
}
    `;

/**
 * __useChatRoomMessagesQuery__
 *
 * To run a query within a React component, call `useChatRoomMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomMessagesQuery({
 *   variables: {
 *      chatID: // value for 'chatID'
 *   },
 * });
 */
export function useChatRoomMessagesQuery(baseOptions?: Apollo.QueryHookOptions<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>) {
        return Apollo.useQuery<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>(ChatRoomMessagesDocument, baseOptions);
      }
export function useChatRoomMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>) {
          return Apollo.useLazyQuery<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>(ChatRoomMessagesDocument, baseOptions);
        }
export type ChatRoomMessagesQueryHookResult = ReturnType<typeof useChatRoomMessagesQuery>;
export type ChatRoomMessagesLazyQueryHookResult = ReturnType<typeof useChatRoomMessagesLazyQuery>;
export type ChatRoomMessagesQueryResult = Apollo.QueryResult<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>;
export const ChatRoomsDocument = gql`
    query ChatRooms {
  chatRooms {
    id
    category {
      name
    }
  }
}
    `;

/**
 * __useChatRoomsQuery__
 *
 * To run a query within a React component, call `useChatRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatRoomsQuery(baseOptions?: Apollo.QueryHookOptions<ChatRoomsQuery, ChatRoomsQueryVariables>) {
        return Apollo.useQuery<ChatRoomsQuery, ChatRoomsQueryVariables>(ChatRoomsDocument, baseOptions);
      }
export function useChatRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRoomsQuery, ChatRoomsQueryVariables>) {
          return Apollo.useLazyQuery<ChatRoomsQuery, ChatRoomsQueryVariables>(ChatRoomsDocument, baseOptions);
        }
export type ChatRoomsQueryHookResult = ReturnType<typeof useChatRoomsQuery>;
export type ChatRoomsLazyQueryHookResult = ReturnType<typeof useChatRoomsLazyQuery>;
export type ChatRoomsQueryResult = Apollo.QueryResult<ChatRoomsQuery, ChatRoomsQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    ...UserDetails
  }
}
    ${UserDetailsFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const PostAndCommentsDocument = gql`
    query PostAndComments($postID: ID!) {
  post(postID: $postID) {
    ...PostDetails
    votes {
      ...VoteDetails
      user {
        ...UserDetails
      }
    }
    comments {
      ...CommentDetails
      createdBy {
        ...UserDetails
      }
    }
    author {
      ...UserDetails
    }
    category {
      ...CategoryDetails
    }
  }
}
    ${PostDetailsFragmentDoc}
${VoteDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;

/**
 * __usePostAndCommentsQuery__
 *
 * To run a query within a React component, call `usePostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostAndCommentsQuery({
 *   variables: {
 *      postID: // value for 'postID'
 *   },
 * });
 */
export function usePostAndCommentsQuery(baseOptions?: Apollo.QueryHookOptions<PostAndCommentsQuery, PostAndCommentsQueryVariables>) {
        return Apollo.useQuery<PostAndCommentsQuery, PostAndCommentsQueryVariables>(PostAndCommentsDocument, baseOptions);
      }
export function usePostAndCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostAndCommentsQuery, PostAndCommentsQueryVariables>) {
          return Apollo.useLazyQuery<PostAndCommentsQuery, PostAndCommentsQueryVariables>(PostAndCommentsDocument, baseOptions);
        }
export type PostAndCommentsQueryHookResult = ReturnType<typeof usePostAndCommentsQuery>;
export type PostAndCommentsLazyQueryHookResult = ReturnType<typeof usePostAndCommentsLazyQuery>;
export type PostAndCommentsQueryResult = Apollo.QueryResult<PostAndCommentsQuery, PostAndCommentsQueryVariables>;
export const CommentsForPostDocument = gql`
    query CommentsForPost($postID: ID!) {
  post(postID: $postID) {
    comments {
      ...CommentDetails
      createdBy {
        ...UserDetails
      }
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentsForPostQuery__
 *
 * To run a query within a React component, call `useCommentsForPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsForPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsForPostQuery({
 *   variables: {
 *      postID: // value for 'postID'
 *   },
 * });
 */
export function useCommentsForPostQuery(baseOptions?: Apollo.QueryHookOptions<CommentsForPostQuery, CommentsForPostQueryVariables>) {
        return Apollo.useQuery<CommentsForPostQuery, CommentsForPostQueryVariables>(CommentsForPostDocument, baseOptions);
      }
export function useCommentsForPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsForPostQuery, CommentsForPostQueryVariables>) {
          return Apollo.useLazyQuery<CommentsForPostQuery, CommentsForPostQueryVariables>(CommentsForPostDocument, baseOptions);
        }
export type CommentsForPostQueryHookResult = ReturnType<typeof useCommentsForPostQuery>;
export type CommentsForPostLazyQueryHookResult = ReturnType<typeof useCommentsForPostLazyQuery>;
export type CommentsForPostQueryResult = Apollo.QueryResult<CommentsForPostQuery, CommentsForPostQueryVariables>;
export const UserCommentsDocument = gql`
    query UserComments($userID: ID) {
  comments(userID: $userID) {
    ...CommentDetails
    createdBy {
      ...UserDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useUserCommentsQuery__
 *
 * To run a query within a React component, call `useUserCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCommentsQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useUserCommentsQuery(baseOptions?: Apollo.QueryHookOptions<UserCommentsQuery, UserCommentsQueryVariables>) {
        return Apollo.useQuery<UserCommentsQuery, UserCommentsQueryVariables>(UserCommentsDocument, baseOptions);
      }
export function useUserCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCommentsQuery, UserCommentsQueryVariables>) {
          return Apollo.useLazyQuery<UserCommentsQuery, UserCommentsQueryVariables>(UserCommentsDocument, baseOptions);
        }
export type UserCommentsQueryHookResult = ReturnType<typeof useUserCommentsQuery>;
export type UserCommentsLazyQueryHookResult = ReturnType<typeof useUserCommentsLazyQuery>;
export type UserCommentsQueryResult = Apollo.QueryResult<UserCommentsQuery, UserCommentsQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    ...UserDetails
  }
}
    ${UserDetailsFragmentDoc}`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const NewChatMessageSubscriptionDocument = gql`
    subscription NewChatMessageSubscription {
  chatMessageAdded {
    node {
      id
      createdAt
      text
      sentBy {
        username
      }
    }
  }
}
    `;

/**
 * __useNewChatMessageSubscriptionSubscription__
 *
 * To run a query within a React component, call `useNewChatMessageSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewChatMessageSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewChatMessageSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewChatMessageSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewChatMessageSubscriptionSubscription, NewChatMessageSubscriptionSubscriptionVariables>) {
        return Apollo.useSubscription<NewChatMessageSubscriptionSubscription, NewChatMessageSubscriptionSubscriptionVariables>(NewChatMessageSubscriptionDocument, baseOptions);
      }
export type NewChatMessageSubscriptionSubscriptionHookResult = ReturnType<typeof useNewChatMessageSubscriptionSubscription>;
export type NewChatMessageSubscriptionSubscriptionResult = Apollo.SubscriptionResult<NewChatMessageSubscriptionSubscription>;