export const SignOutUser = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  alert('signed out!')
}
