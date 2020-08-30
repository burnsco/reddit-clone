import React from "react"
import { MdCreate, MdCreateNewFolder, MdChat } from "react-icons/md"
import { PostAndCatButtons } from "./styles"
import { Box } from "@chakra-ui/core"

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
      <MdCreate size="1.3em" color="#f49342" />
      <Box ml="2">Post</Box>
    </PostAndCatButtons>
    <PostAndCatButtons to={`/${categoryLink}`}>
      <MdCreateNewFolder size="1.3em" color="#f49342" />
      <Box ml="2">Subreddit</Box>
    </PostAndCatButtons>
    <PostAndCatButtons to={`/${chatLink}/ckdlysxvp009g071103kfhjjc`}>
      <MdChat size="1.2em" color="#f49342" />
      <Box ml="2">Chat</Box>
    </PostAndCatButtons>
  </Box>
)

export default PostAndCategoryButtons
