const User = {
  posts: (root, args, { db }) =>
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

export { User as default }
