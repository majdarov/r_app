import React, { useState, useEffect } from "react";
import Profile from "./Profile"
import { getUser } from '../../redux/profileReduser'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";

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

  const getUser = props.getUser;

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  return (
    <Profile />
  );
};

let mapState = state => {
  return {
    profilePage: state.profilePage,
    authId: state.auth.id
  }
}


let redirectAuthContainer = withAuthRedirect(ProfileContainer);

export default connect(mapState, { getUser })(withRouter(redirectAuthContainer));
