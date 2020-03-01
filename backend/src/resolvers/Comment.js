const Comment = {
  author: (root, args, { db }) =>
    db
      .comment({
        id: root.id
      })
      .author()
}

export { Comment as default }
