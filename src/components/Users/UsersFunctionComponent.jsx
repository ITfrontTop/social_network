//  Пользуемся классовой компонентой
// import axios from 'axios';
// import styles from './Users.module.css';
// import userPhoto from '../../assets/images/user.png';

// const Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//           props.setUsers(response.data);
//         });
//     }
//   };

//   return (
//     <div>
//       <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <span>
//             <div>
//               <img
//                 src={/*u.photos.small != null ? u.photos.small : */ userPhoto}
//                 className={styles.userPhoto}
//               />
//             </div>
//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unfollow(u.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(u.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{u.name}</div>
//               <div>{u.status}</div>
//             </span>
//             <span>
//               <div>{'u.location.country'}</div>
//               <div>{u.address.city}</div>
//             </span>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;
