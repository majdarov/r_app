import React, { useEffect } from "react";
import Profile from "./Profile"
import { getUserProfile, getUserStatus } from '../../redux/profileReduser';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

/* class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    id = (id === undefined || id === null) ? this.props.authId : id;
    this.props.getUser(id)
  }
  render() {
    if (!this.props.isAuth) return <Redirect to='/login' />;
    return (
      <Profile />
    );
  }
}; */
const ProfileContainer = props => {

  let id;
  if (props.match.params.userId) {
   id = props.match.params.userId;
  } else {
   id = props.authId;
    if  (id === undefined || !id) {
      props.history.push('/login');
    }
  }

  const getUserProfile = props.getUserProfile;
  const getUserStatus = props.getUserStatus;

  useEffect(() => {
    if  (id === undefined || !id) return;
    getUserProfile (id);
    getUserStatus (id);
  },  [id, getUserProfile, getUserStatus]);

  return ( id && <Profile /> );
};

let mapState = state => {
  return {
    profilePage: state.profilePage,
    authId: state.auth.id,
  }
}

export default compose(
  connect(mapState, { getUserProfile, getUserStatus }),
  withRouter,
)(ProfileContainer)
