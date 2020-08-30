import React from "react"
import PostAndCategoryButtons from "./Buttons"

const CreationButtons: React.FC<{}> = () => {
  return (
    <PostAndCategoryButtons
      postLink="submit"
      categoryLink="createCategory"
      chatLink="chat"
    />
  )
}

export default CreationButtons
