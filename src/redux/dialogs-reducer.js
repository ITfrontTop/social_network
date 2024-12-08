const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ],
  newMessageBody: ''
};
//   switch (action.type) {
//     case UPDATE_NEW_MESSAGE_BODY:
//       return {
//         ...state,
//         newMessageBody: action.body
//       };
//     case SEND_MESSAGE: {
//       let body = state.newMessageBody;
//       return {
//         ...state,
//         newMessageBody: '',
//         messages: [
//           ...state.messages,
//           { id: state.messages.length + 1, message: body }
//         ]
//       };
//     }
//     default:
//       return state;
//   }
// };

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: body }
        ]
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default dialogsReducer;
