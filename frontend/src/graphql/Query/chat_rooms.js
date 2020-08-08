import { gql } from '@apollo/client'

export const GET_CHAT_ROOMS_QUERY = gql`
  query onGetCategoriesQuery {
    chatRooms {
      id
      category {
        name
      }
    }
  }
`
