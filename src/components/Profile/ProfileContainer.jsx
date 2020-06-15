import React from "react";
import Axios from "axios";
import Profile from "./Profile"
import { setUserProfile } from '../../redux/profileReduser'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // let id = window.location.pathname.slice(window.location.pathname.indexOf("/", 2) + 1);
    let id = this.props.match.params.userId;
    id = (!id) ? 2 : id;
    // debugger;
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${id}`
    ).then((res) => {
      this.props.setUserProfile(res.data);
    });
  }
  render() {
    return (
      <Profile />
    );
  }
};

let mapState = state => {
  return state.profilePage
}

export default connect(mapState, { setUserProfile })(withRouter(ProfileContainer));
