import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { LuSendHorizonal } from 'react-icons/lu';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} image={d.image} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  /* самостоятельная работа */
  let newMessageElement = React.createRef();
  const addPost = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.sendMessage}>
          <textarea ref={newMessageElement} className={s.sendWindow}></textarea>
          <div className={s.sendButton} onClick={addPost}>
            <LuSendHorizonal color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
