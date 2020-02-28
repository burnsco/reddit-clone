const Query = {
  categories: (parent, args, ctx) => ctx.prisma.categories(),
  users: (parent, args, ctx) => ctx.prisma.users(),
  posts: (parent, args, ctx) => ctx.prisma.posts(),
  comments: (parent, args, ctx) => ctx.prisma.comments(),

  user: (parent, args, ctx) => ctx.prisma.user({ id: args.userID }),
  post: (parent, args, ctx) => ctx.prisma.post({ id: args.postID }),

  commentsForPost: (parent, args, ctx) =>
    ctx.prisma.post({ id: args.postID }).comments(),

  postsByUser: (parent, args, ctx) =>
    ctx.prisma
      .user({
        id: args.userID
      })
      .posts(),
  commentsByUser: (parent, args, ctx) =>
    ctx.prisma
      .user({
        id: args.userID
      })
      .comments()
}

export { Query as default }
