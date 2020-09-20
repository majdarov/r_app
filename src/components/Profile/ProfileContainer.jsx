import React, { useState, useEffect } from "react";
import Profile from "./Profile"
import { getUserProfile, getUserStatus } from '../../redux/profileReduser';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
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

  const [id, setId] = useState(props.match.params.userId);
  if (id === undefined) setId(props.authId);

  const getUserProfile = props.getUserProfile;
  const getUserStatus = props.getUserStatus;

  useEffect(() => {
    getUserProfile(id);
    getUserStatus(id);
  }, [id, getUserProfile, getUserStatus]);

  return (
    <Profile />
  );
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
  withAuthRedirect
)(ProfileContainer)
