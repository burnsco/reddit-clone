import React from 'react'
import { Create } from '@styled-icons/ionicons-outline'
import { CreateNewFolder } from '@styled-icons/material-outlined'

import { ContainerHeader } from './styles'
import Box from '../../styles/components/Box'

export default function CreationButtons() {
  return (
    <>
      <ContainerHeader to="/submit">
        <Create size="1.3em" color="#f49342" />
        <Box ml="2">Post</Box>
      </ContainerHeader>
      <ContainerHeader to="/createCategory">
        <CreateNewFolder size="1.3em" color="#f49342" />
        <Box ml="2">Subreddit</Box>
      </ContainerHeader>
    </>
  )
}
