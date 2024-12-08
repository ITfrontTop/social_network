const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
  newPostText: 'it-kamasutra.com',
  // нужно поменять на данные с запроса
  profile: [
    {
      aboutMe: '-',
      contacts: {
        facebook: 'facebook.com/58132475',
        website: 'alex.com',
        vk: '-',
        twitter: 'twitter.com/45732',
        instagram: 'instagram.com/82347182',
        youtube: 'youtube.com/34525',
        github: 'github/alex',
        mainLink: '-'
      },
      lookingForAJob: true,
      lookingForAJobDescription: 'i like coding',
      fullName: 'Alex',
      userId: 120,
      photos: {
        small: '120s.jpg',
        large: '120l.jpg'
      }
    }
  ]
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
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
