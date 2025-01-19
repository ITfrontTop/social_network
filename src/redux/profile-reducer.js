import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
  ],
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter((p) => p.id != action.id) };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  } catch (error) {
    alert('');
  }
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSumbit('edit-profile', { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
