import React from 'react'
import { shallow } from 'enzyme'
import { MockedProvider } from '@apollo/client/testing'

import { GET_CATEGORIES_QUERY } from '../graphql/Query/categories'
import Categories from '../components/Categories'

const mocks = [
  {
    request: {
      query: GET_CATEGORIES_QUERY,
    },
    result: {
      data: [
        {
          id: 1,
          name: 'react',
        },
        { id: 2, name: 'funny' },
        { id: 3, name: 'music' },
      ],
    },
  },
]

const CategoriesMenu = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <Categories />
  </MockedProvider>
)

it('renders without errors', () => {
  shallow(<CategoriesMenu />)
})
