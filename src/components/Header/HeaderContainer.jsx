import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout, setAuthUserData } from '../../redux/auth-reducer';

class HeadersComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

const HeaderComponent = connect(mapStateToProps, { setAuthUserData, logout })(
  HeadersComponent
);

export default HeaderComponent;
