import state from './redux/state';
import { rerenderEntireTree } from './render';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App state={state.sidebar} />,
//     children: [
//       {
//         path: '/profile',
//         element: <Profile state={state.profilePage} addPost={addPost} />
//       },
//       {
//         path: '/dialogs',
//         element: <Dialogs state={state.dialogsPage} />,
//         children: [
//           {
//             path: '/dialogs/1'
//           }
//         ]
//       }
//     ]
//   }
// ]);

// let rerenderEntireTree = () => {
//   createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   );
// };

rerenderEntireTree(state);
