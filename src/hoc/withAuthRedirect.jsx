import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/" />;
      }

      return <Component {...this.props} />;
    }
  }

  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectAuthRedirectComponent;
};

export default withAuthRedirect;
