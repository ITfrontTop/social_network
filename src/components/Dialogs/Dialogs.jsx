import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { LuSendHorizonal } from 'react-icons/lu';
import { Navigate } from 'react-router-dom';
import { Field } from 'react-final-form';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} image={d.image} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  /* самостоятельная работа */
  // let newMessageElement = React.createRef();
  // const addPost = () => {
  //   let text = newMessageElement.current.value;
  //   alert(text);
  // };

  let sendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Navigate to={'/'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handelSubmit} className={s.sendMessage}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div className={s.sendButton}>
        <LuSendHorizonal color="#fff" />
      </div>
    </form>
  );
};

export default Dialogs;
