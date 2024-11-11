import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const root = createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
  root.render(
    <StrictMode>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <App state={store.getState()} />,
            children: [
              {
                path: '/profile',
                element: (
                  <Profile
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                  />
                )
              },
              {
                path: '/dialogs',
                element: (
                  <Dialogs state={store.getState().dialogsPage} store={store} />
                ),
                children: [{ path: '/dialogs/1' }]
              }
            ]
          }
        ])}
      />
    </StrictMode>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

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
