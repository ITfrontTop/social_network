import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Provider } from 'react-redux';
import UserContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <App state={store.getState()} />,
            children: [
              {
                path: '/profile',
                element: <ProfileContainer store={store} />
                // children: [
                //   {
                //     path: 'profile/:userId'
                //   }
                // ]
              },
              {
                path: '/dialogs',
                element: <DialogsContainer store={store} />,
                children: [
                  {
                    path: '/dialogs/1'
                  }
                ]
              },
              {
                path: '/users',
                element: <UserContainer />
              },
              {
                path: '/login',
                element: <LoginPage />
              }
            ]
          }
        ])}
      />
    </Provider>
  </StrictMode>
);
