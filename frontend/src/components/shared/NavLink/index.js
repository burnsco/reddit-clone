import React from 'react'
import { Link } from '@reach/router'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: {
        color: isCurrent ? 'black' : 'grey',
        background: isCurrent ? '#ebedf0' : 'transparent',
      },
    })}
  />
)

export default NavLink
