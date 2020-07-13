export const onLogoutUser = async () => {
  fetch('https://localhost:4000/refresh_token', {
    method: 'POST',
    credentials: 'include',
  })
}
