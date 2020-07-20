import React from 'react'
import { render } from '@testing-library/react'

const App = () => <p>learn react</p>

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
