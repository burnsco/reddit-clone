import React from 'react'
import { Create } from '@styled-icons/ionicons-outline'
import { CreateNewFolder } from '@styled-icons/material-outlined'
import { ChatText } from '@styled-icons/bootstrap'
import { PostAndCatButtons } from './styles'
import { Box } from '@chakra-ui/core'

type CreationButtonsProps = {
  postLink: string
  categoryLink: string
  chatLink: string
}

const PostAndCategoryButtons = ({
  postLink,
  categoryLink,
  chatLink
}: CreationButtonsProps) => (
  <Box>
    <PostAndCatButtons to={`/${postLink}`}>
      <Create size="1.3em" color="#f49342" />
      <Box ml="2">Post</Box>
    </PostAndCatButtons>
    <PostAndCatButtons to={`/${categoryLink}`}>
      <CreateNewFolder size="1.3em" color="#f49342" />
      <Box ml="2">Subreddit</Box>
    </PostAndCatButtons>
    <PostAndCatButtons to={`/${chatLink}/ckdlysxvp009g071103kfhjjc`}>
      <ChatText size="1.2em" color="#f49342" />
      <Box ml="2">Chat</Box>
    </PostAndCatButtons>
  </Box>
)

export default PostAndCategoryButtons
