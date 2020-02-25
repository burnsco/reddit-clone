const Query = {
  users: (_, __, { db }) => db.users,

  user: (_, { userID }, { db }) => db.users.find(u => u.id === userID),

  categories: (_, __, { db }) => db.categories,

  posts: (_, { category }, { db }) =>
    !category ? db.posts : db.posts.filter(p => p.category === category),

  post: (_, { postID }, { db }) => db.posts.find(p => p.id === postID),

  comments: (_, __, { db }) => db.comments
}

export { Query as default }
