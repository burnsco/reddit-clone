import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate } from '@reach/router'
import PropTypes from 'prop-types'
import { FeedContainer, HomeContainer, SidebarContainer } from './styles.js'
import Categories from '../../components/Categories'
import MainSpinner from '../../components/shared/FallBackSpinner/index.js'
import CreationButtons from './CreationButtons.js'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories.js'
import { CURRENT_USER_QUERY } from '../../graphql/Query/current_user.js'
import NoAuthHomePage from './noAuth.js'
import { useAuth } from '../../context/auth-context.js'

const HomePage = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY, {
    pollInterval: 500,
  })

  const {
    loading: { checkingUser },
    data: { checkUser },
  } = useQuery(CURRENT_USER_QUERY)

  const navigate = useNavigate()

  const { user } = useAuth()

  if (loading || checkingUser) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>error, please return to where you came</div>
  }

  const handleSelect = (selectedCategory) => {
    console.log(`Option selected: `, selectedCategory)
    navigate(`/r/${selectedCategory.label}`, { replace: true })
  }

  const options = data.categories.map((option) => ({
    value: option.id,
    label: option.name,
  }))
  if ((checkUser && checkUser.currentUser) || user !== null) {
    return (
      <HomeContainer>
        <FeedContainer>
          <CreationButtons options={options} handleSelect={handleSelect} />
          {children}
        </FeedContainer>
        <SidebarContainer>
          <Categories />
        </SidebarContainer>
      </HomeContainer>
    )
  }
  return <NoAuthHomePage />
}
HomePage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomePage
