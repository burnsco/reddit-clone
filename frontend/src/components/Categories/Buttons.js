import React from 'react'
import { Create } from '@styled-icons/ionicons-outline'
import { CreateNewFolder } from '@styled-icons/material-outlined'
import { ChatText } from '@styled-icons/bootstrap'
import { ContainerHeader } from './styles'
import Box from '../../styles/components/Box'

const PostAndCategoryButtons = ({ postLink, categoryLink, chatLink }) => (
  <>
    <ContainerHeader to={`/${postLink}`}>
      <Create size="1.3em" color="#f49342" />
      <Box ml="2">Post</Box>
    </ContainerHeader>
    <ContainerHeader to={`/${categoryLink}`}>
      <CreateNewFolder size="1.3em" color="#f49342" />
      <Box ml="2">Subreddit</Box>
    </ContainerHeader>
    <ContainerHeader to={`/${chatLink}/ckdlysxvp009g071103kfhjjc`}>
      <ChatText size="1.2em" color="#f49342" />
      <Box ml="2">Chat</Box>
    </ContainerHeader>
  </>
)

export default PostAndCategoryButtons
