import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
