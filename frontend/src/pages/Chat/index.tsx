import React from "react"
import ListOfChatRooms from "./left/ListOfChatRooms"
import ChatsPageWithData from "./ChatsPageWithData"
import { Box } from "@chakra-ui/core"

const ChatPage: React.FC<{ chatID: string }> = ({ chatID }) => {
  return (
    <Box>
      <ListOfChatRooms />
      <ChatsPageWithData chatID={chatID} />
    </Box>
  )
}

export default ChatPage
