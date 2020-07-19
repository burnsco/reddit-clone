//
import { setAccessToken } from '../context/access-token'
// posts to refresh token route
// sets refresh token if user has access token already

function RefreshToken() {
  fetch('http://localhost:4000/refresh_token', {
    method: 'POST',
    credentials: 'include',
  }).then(async (x) => {
    const data = await x.json()
    if (data.accessToken) {
      setAccessToken(data.accessToken)
      return
    }
    throw new Error('No access token, cannot refresh')
  })
}

export default RefreshToken
