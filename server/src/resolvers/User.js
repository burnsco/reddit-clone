const User = {
  posts: ({ username }, _, { db }) =>
    db.posts.filter(p => p.author === username),
  comments: ({ username }, _, { db }) =>
    db.comments.filter(c => c.author === username)
}

export { User as default }
