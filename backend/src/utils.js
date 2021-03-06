import jwt from "jsonwebtoken"
import { AuthenticationError } from "apollo-server-express"

export const getUser = req => {
  const { authorization } = req.headers

  if (authorization) {
    try {
      const token = authorization.split(" ")[1]
      const user = jwt.verify(token, process.env.JWT_SECRET)
      return user
    } catch (ex) {
      throw new AuthenticationError(ex)
    }
  }
  if (!authorization) {
    return new AuthenticationError("Not authenticated")
  }

  return null
}

export const createAccessToken = user => {
  return jwt.sign({ userID: user.id }, process.env.JWT_SECRET, {
    expiresIn: "300m"
  })
}

export const createRefreshToken = user => {
  return jwt.sign({ userID: user.id }, process.env.JWT_REFRESH, {
    expiresIn: "21d"
  })
}

export const sendRefreshToken = (res, token) => {
  res.cookie("redt", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    path: "/refresh_token"
  })
}

export const deleteRefreshToken = user => {
  return jwt.sign({ userID: user.id }, process.env.JWT_REFRESH, {
    expiresIn: "1m"
  })
}

export const clearRefreshToken = res => {
  res.clearCookie("redt", "", {
    httpOnly: true,
    path: "/refresh_token"
  })
}

export const validateToken = authToken => {
  const user = jwt.verify(authToken, process.env.JWT_SECRET)
  return user
}

export const findUser = authToken => {
  const user = jwt.verify(authToken, process.env.JWT_SECRET)
  return user
}
