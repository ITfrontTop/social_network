import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objects-helper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [
    {
      name: 'Alex',
      id: '120',
      uniqueUrlName: null,
      photos: {
        small: '120s.jpg',
        large: '120l.jpg'
      },
      status:
        'Іноді вистачає миті, щоб забути життя, а іноді не вистачає життя, щоб забути мить.',
      followed: false,
      location: {
        city: 'Kiev',
        country: 'Ukraine'
      }
    },
    {
      name: 'Max',
      id: '121',
      uniqueUrlName: null,
      photos: {
        small: '121s.jpg',
        large: '121l.jpg'
      },
      status:
        'Сенс життя не в тому, щоб чекати, коли закінчиться гроза, а в тому, щоб вчитися танцювати під дощем. (Життя це не очікування того, що шторм закінчиться. Життя це вчитися танцювати під дощем.)',
      followed: true,
      location: {
        city: 'Kiev',
        country: 'Ukraine'
      }
    },
    {
      name: 'Lii',
      id: '122',
      uniqueUrlName: null,
      photos: {
        small: '122s.jpg',
        large: '122l.jpg'
      },
      status:
        'Я, наприклад, завжди засмучуюсь, коли думаю про життя, що не використовую свою можливість і втрачаю дорогоцінні секунди, а життя таке коротке.',
      followed: true,
      location: {
        city: 'Kiev',
        country: 'Ukraine'
      }
    }
  ],
  pageSize: 5,
  totalUsersCount: 45,
  currentPage: 3,
  isFetching: true,
  followingInProgress: []
};
//

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId)
      };
    }
    default:
      return state;
  }
};

// AC (actionCreator) - сокращенная запись
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
// action setting users
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
