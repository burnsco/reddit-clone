
const newPostSubscribe = async (root, args, {db}, info) => await db.$subscribe.post({ mutation_in: ['CREATED']}).node()

const newCommentSubscribe = async (root, args,{db}, info) => await db.$subscribe.comment({ mutation_in: ['CREATED']}).node()

const Subscription = {
 
  const newPost = {
    subscribe: newPostSubscribe,
    resolve: payload => payload
  }

  const newComment = {
    subscribe: newCommentSubscribe,
    resolve: payload => payload
  }
   
}

export { Subscription as default }
