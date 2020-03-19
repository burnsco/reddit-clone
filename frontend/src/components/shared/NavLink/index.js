import React from 'react'
import { Link } from '@reach/router'
import { LeftArrowAlt } from '@styled-icons/boxicons-regular'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? 'black' : 'grey'
        }
      }
    }}
  />
)

export default NavLink
