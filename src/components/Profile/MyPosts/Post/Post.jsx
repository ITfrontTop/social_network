import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7yEiUpUs1xhWkr2CvHC_1ClkVPkJLlzaLQ&s" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
