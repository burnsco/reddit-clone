const Comment = {
  author: (root, args, { db }) =>
    db
      .comment({
        id: root.postId
      })
      .author()
}

export { Comment as default }
