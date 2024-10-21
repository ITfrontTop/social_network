import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { addPost, updateNewPostText } from './redux/state.js';

export let rerenderEntireTree = (state) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App state={state.sidebar} />,
      children: [
        {
          path: '/profile',
          element: (
            <Profile
              profilePage={state.profilePage}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
            />
          )
        },
        {
          path: '/dialogs',
          element: <Dialogs state={state.dialogsPage} />,
          children: [
            {
              path: '/dialogs/1'
            }
          ]
        }
      ]
    }
  ]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
