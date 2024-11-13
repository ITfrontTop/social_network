import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { LuSendHorizonal } from 'react-icons/lu';

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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.sendMessage}>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              className={s.sendWindow}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className={s.sendButton} onClick={sendMessageClick}>
            <LuSendHorizonal color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
