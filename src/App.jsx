import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import store from './redux/store';

const App = (props) => {
  return (
    <div>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="app-wrapper-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
