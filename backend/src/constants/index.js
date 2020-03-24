export const PostDoesNotExist = {
  code: '401',
  success: false,
  message: 'Post does not Exist!'
}

export const CommentDoesNotExist = {
  code: '401',
  success: false,
  message: 'Comment does not Exist!'
}

export const UserDoesNotExist = {
  code: '401',
  success: false,
  message: 'User does not Exist!'
}

export const BadCredentials = {
  code: '401',
  success: false,
  message: 'Bad Credentials'
}

export const EmailTaken = {
  code: '401',
  success: false,
  message: 'Email is already in use!'
}

export const NoAuthorization = {
  code: '401',
  success: false,
  message: 'Not Authorized',
  id: null,
  createdAt: null,
  title: null,
  text: null,
  author: null
}

export const AlreadyVoted = {
  code: '401',
  success: false,
  message: 'user has already voted'
}

export const LoginSuccess = {
  code: '200',
  success: true,
  message: 'Login was a success'
}

export const UserNotLoggedIn = {
  code: '401',
  success: false,
  message: 'No User Found'
}

export const CategoryTitleTaken = {
  code: '401',
  success: false,
  message: 'This subreddit already exists!'
}
