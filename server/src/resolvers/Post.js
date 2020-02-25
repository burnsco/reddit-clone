const Post = {
  author: ({ author }, _, { db }) => db.users.find(u => u.username === author),
  comments: ({ id }, _, { db }) => db.comments.filter(c => c.postID === id)
}

export { Post as default }
