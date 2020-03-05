import React from 'react'
import { redirectTo } from '@reach/router'

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  if (isAuthenticated) {
    return <Component {...rest} />
  } else {
    redirectTo('/login')
  }
}

export default PrivateRoute
