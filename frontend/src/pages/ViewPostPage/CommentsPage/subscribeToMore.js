_subscribeToNewComments = () => {
  this.props.COMMENTS.subscribeToMore({
    variables: {
      eventId: this.props.eventId
    },
    document: gql`
      subscription newPosts($eventId: ID!) {
        Post(
          filter: { mutation_in: [CREATED], node: { event: { id: $eventId } } }
        ) {
          node {
            id
            body
            createdAt
            event {
              id
            }
            author {
              id
            }
          }
        }
      }
    `,
    updateQuery: (previous, { subscriptionData }) => {
      const {
        author,
        body,
        id,
        __typename,
        createdAt,
        event
      } = subscriptionData.data.Post.node

      let newPosts = _cloneDeep(previous)

      // Test to see if item is already in the store
      const idAlreadyExists =
        newPosts.allPosts.filter(item => {
          return item.id === id
        }).length > 0

      // Only add it if it isn't already there
      if (!idAlreadyExists) {
        newPosts.allPosts.unshift({
          author,
          body,
          id,
          __typename,
          createdAt,
          event
        })
        return newPosts
      }
    }
  })
}

_subscribeToNewReplies = () => {
  this.props.COMMENT_REPLIES.subscribeToMore({
    variables: {
      eventId: this.props.eventId
    },
    document: gql`
      subscription newPostReplys($eventId: ID!) {
        PostReply(
          filter: {
            mutation_in: [CREATED]
            node: { replyTo: { event: { id: $eventId } } }
          }
        ) {
          node {
            id
            replyTo {
              id
            }
            body
            createdAt
            author {
              id
            }
          }
        }
      }
    `,
    updateQuery: (previous, { subscriptionData }) => {
      const {
        author,
        body,
        id,
        __typename,
        createdAt,
        replyTo
      } = subscriptionData.data.PostReply.node

      let newPostReplies = _cloneDeep(previous)

      // Test to see if item is already in the store
      const idAlreadyExists =
        newPostReplies.allPostReplies.filter(item => {
          return item.id === id
        }).length > 0

      // Only add it if it isn't already there
      if (!idAlreadyExists) {
        newPostReplies.allPostReplies.unshift({
          author,
          body,
          id,
          __typename,
          createdAt,
          replyTo
        })
        return newPostReplies
      }
    }
  })
}
