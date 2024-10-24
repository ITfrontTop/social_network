import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: 'Hi, how are you?',
        likesCount: 12
      },
      {
        id: 2,
        message: "It's my first post",
        likesCount: 11
      },
      {
        id: 3,
        message: 'Blabla',
        likesCount: 11
      },
      {
        id: 4,
        message: 'Dada',
        likesCount: 11
      }
    ],
    newPostText: 'it-kamasutra.com'
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' }
    ],
    dialogs: [
      {
        id: 1,
        name: 'Dimych',
        image:
          'https://d22e6o9mp4t2lx.cloudfront.net/cms/img_AQO_Pe_Pie_STC_59p_Oy_Zo8mbm7d_5a6a9d88fe.png'
      },
      {
        id: 2,
        name: 'Andrew',
        image:
          'https://fotoblik.ru/wp-content/uploads/2023/09/naruto-i-saske-na-avu-1.webp'
      },
      {
        id: 3,
        name: 'Sveta',
        image:
          'https://opis-cdn.tinkoffjournal.ru/mercury/ai-avatars-22.7snrak..jpeg'
      },
      {
        id: 4,
        name: 'Sasha',
        image:
          'https://opis-cdn.tinkoffjournal.ru/mercury/ai-avatars-16-upd.bliw0gd0ci4y..jpg'
      },
      {
        id: 5,
        name: 'Victor',
        image:
          'https://meragor.com/files/styles//ava_800_800_wm/futbol-lyudi-muzhchiny-ristiano_onaldo_cristiano_ronaldo-sport-11435.jpg'
      },
      {
        id: 6,
        name: 'Valera',
        image:
          'https://cdn.informator.ua/@dp/media/ua/2023/07/22/64bc0aab7b4934.48358020.webp'
      },
      {
        id: 7,
        name: 'Alexia',
        image:
          'https://bannerplus.ru/files/img/pics/avatarki-dlia-zhenshchin-kartinki/avatarki-dlia-zhenshchin-kartinki-85.webp'
      }
    ]
  },
  sidebar: {
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
          'https://illustrators.ru/uploads/illustration/image/1531804/B7C59B33-D215-4E1F-B7B5-2C432187D103.png'
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
          'https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg'
      },
      {
        id: 7,
        name: 'Julia',
        images:
          'https://i.pinimg.com/originals/8a/78/16/8a7816fa8f0b538785d3c7cb40d1f7a0.jpg'
      }
    ]
  }
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
