import profileReducer, { addPostActionCreator } from './profile-reducer';
import deletePost from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "it' my first post", likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 10 },
    { id: 4, message: 'Dada', likesCount: 12 }
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra.com');

  //2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it('length of posts should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra.com');

  //2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it(`after deleting length of messages shouldn't decrement`, () => {
  // 1. test data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
