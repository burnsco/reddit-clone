const Post = {
  author: (root, args, { db }) =>
    db
      .post({
        id: root.id
      })
      .author(),
  comments: (root, args, { db }) =>
    db
      .post({
        id: root.id
      })
      .author()
}

export { Post as default }
