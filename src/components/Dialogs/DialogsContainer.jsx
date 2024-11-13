import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import store from '../../redux/store';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      store={store}
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={props.store.getState().dialogsPage}
    />
  );
};

export default DialogsContainer;
