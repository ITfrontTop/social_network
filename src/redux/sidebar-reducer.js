let initialState = {
  friends: [
    {
      id: 1,
      name: 'Anna',
      images:
        'https://i.pinimg.com/736x/4e/c7/d4/4ec7d4e8f9fd8ec71d2e21685ecf024e.jpg'
    },
    {
      id: 2,
      name: 'Mike',
      images:
        'https://cs14.pikabu.ru/post_img/big/2024/04/15/11/1713208600167542114.jpg'
    },
    {
      id: 3,
      name: 'Ron',
      images:
        'https://i.pinimg.com/736x/a0/4e/fc/a04efc1e30b79d75c3c4a76b6dc438a2.jpg'
    },
    {
      id: 4,
      name: 'Pitter',
      images:
        'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg'
    },
    {
      id: 5,
      name: 'Kate',
      images:
        'https://i.pinimg.com/736x/3f/8f/d9/3f8fd9361557ee7bd315da210cf0dbc6.jpg'
    },
    {
      id: 6,
      name: 'Mate',
      images:
        'https://i.pinimg.com/736x/71/81/14/7181149979b9cc345415d3b6465b192b.jpg'
    },
    {
      id: 7,
      name: 'Julia',
      images:
        'https://i.pinimg.com/originals/8a/78/16/8a7816fa8f0b538785d3c7cb40d1f7a0.jpg'
    }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
