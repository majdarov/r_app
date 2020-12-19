import React from 'react';
import { connect } from 'react-redux';
import {
  followUser,
  unFollowUser,
  setPage,
  requestUsers,
} from '../../redux/usersReduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getPageSize,
  getTotalUsersCount,
  getPageNumber,
  getIsFetching,
  getCurrentFollowers,
  getUsers
} from '../../redux/users-selector';

class UsersContainer extends React.Component {
  componentDidMount() {
      this.changePage(this.props.pageNumber);
  }

  changePage = (p) => {
    if (p !== this.props.pageNumber) this.props.setPage(p);
    this.props.requestUsers(p, this.props.pageSize);
  };

  render() {
    // console.log("Render USERS");
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} changePage={this.changePage} />
        )}
      </>
    );
  }
}

/* const mapState = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageNumber: state.usersPage.pageNumber,
    isFetching: state.usersPage.isFetching,
    currentFollowers: state.usersPage.currentFollowers
  };
}; */

const mapState = (state) => {
  // console.log("Map State USERS")
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    pageNumber: getPageNumber(state),
    isFetching: getIsFetching(state),
    currentFollowers: getCurrentFollowers(state)
  };
};

export default compose(
  connect(mapState, {
  followUser,
  unFollowUser,
  setPage,
  requestUsers,
}),
)(UsersContainer);
