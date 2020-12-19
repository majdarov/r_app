import React, { useEffect } from "react";
import Profile from "./Profile"
import { getUserProfile, getUserStatus } from '../../redux/profileReduser';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const ProfileContainer = props => {

  let id;
  if (props.match.params.userId) {
    id = props.match.params.userId;
  } else {
    id = props.authId;
    if (!id) {
      props.history.push('/login');
    }
  }

  const getUserProfile = props.getUserProfile;
  const getUserStatus = props.getUserStatus;

  useEffect(() => {
    // console.log("RENDER PROFILE");
    if (id !== undefined && !!id) {
      getUserProfile(id);
      getUserStatus(id);
    }
  }, [id, getUserProfile, getUserStatus]);

  return ( id && <Profile /> );
};

let mapState = state => {
  // console.log("MapState PROFILE")
  return {
    // profilePage: state.profilePage,
    authId: state.auth.id,
  }
}

export default compose(
  connect(mapState, { getUserProfile, getUserStatus }),
  withRouter,
)(ProfileContainer)
