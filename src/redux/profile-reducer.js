const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
      likesCount: 16
    }
  ],
  newPostText: 'it-kamasutra.com'
};

// решения gpt
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;

// старый код который не работает!!!!!!!
// const profileReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       let newPost = {
//         id: 5,
//         message: state.newPostText,
//         likesCount: 0
//       };
//       state.posts.push(newPost);
//       state.newPostText = '';
//       return state;
//     case UPDATE_NEW_POST_TEXT:
//       state.newPostText = action.newText;
//       return state;
//     default:
//       return state;
//   }
// };
