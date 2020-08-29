import { setAccessToken } from '../context/access-token'

export const checkRefreshToken = () => {
  fetch('http://localhost:4000/refresh_token', {
    method: 'POST',
    credentials: 'include'
  }).then(async x => {
    const { accessToken } = await x.json()
    setAccessToken(accessToken)
  })
}
