export type PostProps = {
  post: {
    id: string
    title: string
    text: string
    score: number
    votes: object
    category: {
      name: string
    }
    comments: string[]
    createdAt: string
    author: {
      username: string
      id: string
    }
  }
}
