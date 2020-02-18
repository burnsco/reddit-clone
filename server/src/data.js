const getPosts = () => [
  {
    id: '1',
    title: 'First Post!',
    url: 'www.google.ca',
    comments: 3,
    category: '/r/music',
    author: 'cburn343',
    votes: 34
  },
  {
    id: '2',
    title: 'Second Post!',
    url: 'www.reddit.com',
    comments: 3,
    category: '/r/television',
    author: 'tom34',
    votes: 1
  },
  {
    id: '3',
    title: 'The very Third Post!@#@',
    url: 'yahoo.ca',
    comments: 3,
    category: '/r/webdev',
    author: 'cburn343',
    votes: 12
  },
  {
    id: '4',
    title: '4th post!DF',
    url: 'www.google.ca',
    comments: 3,
    category: '/r/react',
    author: 'abb34dfdf',
    votes: 312
  }
]

exports.getPosts = getPosts
