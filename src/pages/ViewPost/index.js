import React from 'react'
import PostPageWithData from './PostPage/container'
import CommentsButton from './CommentsButton'
import CommentsPageWithData from './CommentsPage/container'
import { PostPageContainer } from './styles'

const ViewPostPage = ({ postID }) => (
  <PostPageContainer>
    <PostPageWithData postID={postID} />
    <CommentsButton />
    <CommentsPageWithData postID={postID} />
  </PostPageContainer>
)

export default ViewPostPage
