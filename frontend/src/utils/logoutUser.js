const LogoutUser = () => {
  fetch('http://localhost:4000/logout', {
    method: 'POST',
    credentials: 'include'
  }).then(async x => {
    const result = await x
    console.log(result)
  })
}

export default LogoutUser
