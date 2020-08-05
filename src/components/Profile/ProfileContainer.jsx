import React from "react";
import Profile from "./Profile"
import { getUser } from '../../redux/profileReduser'
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    id = (id === undefined || id === null) ? this.props.authId : id;
    // console.log(`id: ${id}`)
    this.props.getUser(id)
  }
  render() {
    if(!this.props.isAuth) return <Redirect to='/login'/>;
    return (
      <Profile />
    );
  }
};

let mapState = state => {
  return {
    profilePage: state.profilePage,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapState, { getUser })(withRouter(ProfileContainer));
