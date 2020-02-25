const Comment = {
  author: ({ author }, _, { db }) => db.users.find(u => u.username === author)
}

export { Comment as default }
