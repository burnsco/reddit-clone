const User = {
  posts: (root, args, { db }) =>
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

export { User as default }
