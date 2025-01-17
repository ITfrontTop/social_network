import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field } from 'react-final-form';
import {
  maxLengthCreator,
  required
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsConstrols';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3 className={s.title}>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.wrapperSendPost}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={'post message'}
          validate={[required]}
        />
      </div>
      <div>
        <button className={s.sendPostButton}>Add post</button>
      </div>
    </form>
  );
};

export default MyPosts;
