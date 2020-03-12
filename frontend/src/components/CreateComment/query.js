import { gql } from '@apollo/client'

const SUBMIT_COMMENT = gql`
mutation SUBMIT_COMMENT($body: String!, postID: String!){
  createComment(data: { body: $body, postID: $postID }) {
    code
    success
    message
  }
}
`
