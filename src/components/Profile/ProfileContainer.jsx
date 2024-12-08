import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfilesContainer extends React.Component {
  componentDidMount() {
    // let userId = this.props.match.params.userId;
    // if (!userId) {
    //   userId = 2;
    // }
    axios.get('http://localhost:3000/profile?userId=120').then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

// const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
//   WithUrlDataContainerComponent
// );

// let WithUrlDataContainerComponent = withRouter(ProfilesContainer);

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  ProfilesContainer
);

export default ProfileContainer;
