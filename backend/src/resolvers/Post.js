const Post = {
  author: (root, args, { db }) =>
    db
      .post({
        id: root.postID
      })
      .author(),

  comments: (root, args, { db }) =>
    db
      .post({
        id: root.postID
      })
      .author()
}

export { Post as default }
