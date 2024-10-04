import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/DIalogs.jsx';
import state from './redux/state.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/profile',
        element: <Profile state={state.profilePage} />
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
