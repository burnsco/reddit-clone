import React from 'react'
import { Link } from '@reach/router'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: {
        color: isCurrent ? 'black' : 'grey',
      },
    })}
  />
)

export default NavLink
