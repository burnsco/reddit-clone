import React from 'react'

const Profile = ({ username }) => {
  return (
    <div>
      <h2>Welcome</h2>
      <h3>{username || 'User'}</h3>
      <p>OVERVIEW -- POSTS -- COMMENTS</p>
      <ul>
        <li>post</li>
        <li>post</li>
        <li>post</li>
        <li>post</li>
      </ul>
    </div>
  )
}

export default Profile
