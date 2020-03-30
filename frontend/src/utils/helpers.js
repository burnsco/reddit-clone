import React from 'react'

export const withUser = WrappedComponent => {
  class HOC extends React.Component {
    state = { user: []}
  }
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser()
    this.setState({
      user: [...user]
    })
  }

  
  render(){
    const { username } = this.state.user
    if (!username) return 'loading...'
    return <WrappedComponent {...this.props} username={username}/>
  }
}
