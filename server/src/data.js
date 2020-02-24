export const users = [
  {
    id: '1',
    username: 'cburns86',
    email: 'coreymburns@gmail.com'
  },
  {
    id: '2',
    username: 'tomJohn39',
    email: 'tomJohnson@gmail.com'
  },
  {
    id: '3',
    username: 'sussieeeZ',
    email: 'susiezimmers@outlook.com'
  }
]

export const categories = [
  { id: 1, title: 'music', subreddit: '/r/music' },
  { id: 2, title: 'webdev', subreddit: '/r/webdev' },
  { id: 3, title: 'react', subreddit: '/r/react' },
  { id: 4, title: 'all', subreddit: '/' }
]

export const posts = [
  {
    id: '10',
    type: 'link',
    title: 'First Post!',
    url: 'www.google.ca',
    category: 'webdev',
    author: 'cburns86',
    published: true,
    votes: 5
  },
  {
    id: '11',
    title: 'Second Post!!',
    type: 'media',
    url: 'www.reactjs.com',
    category: 'react',
    author: 'tomJohn39',
    published: true,
    votes: 23
  },
  {
    id: '12',
    type: 'link',
    title: 'Third Post!!',
    url: 'www.youtube.com',
    category: 'music',
    author: 'sussieeeZ',
    published: true,
    votes: 12
  },
  {
    id: '13',
    type: 'link',
    title: '4th Post',
    url: 'www.youtube.com',
    category: 'music',
    author: 'sussieeeZ',
    published: true,
    votes: 12
  },
  {
    id: '14',
    type: 'link',
    title: 'Third Post!!',
    url: 'www.youtube.com',
    category: 'react',
    author: 'cburns86',
    published: true,
    votes: 12
  }
]

export const comments = [
  {
    id: '20',
    body: 'hey i went to the store and bought chips',
    author: 'cburns86',
    postID: '11'
  },
  {
    id: '21',
    body: 'nobody knows and nobody goes!',
    author: 'cburns86',
    postID: '11'
  },
  {
    id: '22',
    body: 'and i have to fart but nobody can know!',
    author: 'cburns86',
    postID: '12'
  },
  {
    id: '23',
    body: 'things and stuff and other beings are there',
    author: 'tomJohn39',
    postID: '10'
  },
  {
    id: '24',
    body: 'art fart do part a lart cart',
    author: 'tomJohn39',
    postID: '10'
  },
  {
    id: '25',
    body: 'comment and more comment and more stuff',
    author: 'sussieeeZ',
    postID: '13'
  },
  {
    id: '26',
    body: 'blah blah this is a comment',
    author: 'sussieeeZ',
    postID: '14'
  }
]
