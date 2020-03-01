import { jwt } from 'jsonwebtoken'

const generateToken = user => {
  return jwt.sign(
    {
      id: user.id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30min'
    }
  )
}

export default generateToken
