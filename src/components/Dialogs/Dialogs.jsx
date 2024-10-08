import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} image={d.image} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
