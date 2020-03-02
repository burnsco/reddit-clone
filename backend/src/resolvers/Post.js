const Post = {
  author: (root, args, { db }) =>
    db
      .post({
        id: root.postId
      })
      .author(),
  comments: (root, args, { db }) =>
    db
      .post({
        id: root.postId
      })
      .author()
}

export { Post as default }
