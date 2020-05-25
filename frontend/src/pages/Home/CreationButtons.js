import React from 'react'
import { ContainerHeader } from './styles'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../Header/query'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user'

const CreationButtons = () => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (data && data.currentUser) {
    return (
      <>
        <TopControls>
          <TopControlSelectContainer>
            <TopControlSelect
              name="category"
              options={options}
              onChange={handleSelect}
            />
          </TopControlSelectContainer>
          <TopControlButtons isRed to="/submit">
            Post
          </TopControlButtons>
          <TopControlButtons isBlue to="/createCategory">
            Category
          </TopControlButtons>
        </TopControls>
      </>
    )
  } else {
    return null
  }
}

export default CreationButtons
