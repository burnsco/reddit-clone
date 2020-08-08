import { gql } from '@apollo/client'

export const GET_CHATS_BY_CATEGORY_QUERY = gql`
  query onGetChatsByCategoryQuery($query: String!) {
    chats(query: $query) {
      id
      createdAt
      messages {
        id
        text
        sentBy {
          id
          createdAt
          username
        }
      }
    }
  }
`
