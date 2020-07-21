import React from "react";
import Profile from "./Profile"
import { setUser } from '../../redux/profileReduser'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    id = (id === undefined || id === null) ? this.props.authId : id;
    // console.log(`id: ${id}`)
    this.props.setUser(id)
  }
  render() {
    return (
      <Profile />
    );
  }
};

let mapState = state => {
  return {
    profilePage: state.profilePage,
    authId: state.auth.id
  }
}

export default connect(mapState, { setUser })(withRouter(ProfileContainer));
