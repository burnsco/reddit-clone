import React from 'react'
import { Link } from '@reach/router'

const Navlink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? 'red' : 'blue'
        }
      }
    }}
  />
)

export default Navlink
