import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Provider } from 'react-redux';
import UserContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

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
                element: <ProfileContainer store={store} />,
                children: [
                  {
                    // path: 'profile/1'
                  }
                ]
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
              }
            ]
          }
        ])}
      />
    </Provider>
  </StrictMode>
);

// Старый код, который сейчас не работает!!!!!!!!!!!!!
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import Dialogs from './components/Dialogs/Dialogs';
// import Profile from './components/Profile/Profile';
// import store from './redux/redux-store';
// import { createRoot } from 'react-dom/client';
// import { StrictMode } from 'react';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App state={store.getState()} />,
//     children: [
//       {
//         path: '/profile',
//         element: <Profile state={store.getState()} dispatch={store.dispatch} />
//       },
//       {
//         path: '/dialogs',
//         element: <Dialogs state={store.getState().dialogsPage} store={store} />,
//         children: [
//           {
//             path: '/dialogs/1'
//           }
//         ]
//       }
//     ]
//   }
// ]);

// let rerenderEntireTree = (store) => {
//   createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   );
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
