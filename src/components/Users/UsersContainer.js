import React from 'react';
import { connect } from 'react-redux';
import {
  followUser,
  unFollowUser,
  setPage,
  getUsers,
} from '../../redux/usersReduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
      this.changePage(this.props.pageNumber);
  }

  changePage = (p) => {
    if (p !== this.props.pageNumber) this.props.setPage(p);
    this.props.getUsers(p, this.props.pageSize);
  };

  render() {
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

const mapState = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageNumber: state.usersPage.pageNumber,
    isFetching: state.usersPage.isFetching,
    currentFollowers: state.usersPage.currentFollowers
  };
};

export default compose(
  connect(mapState, {
  followUser,
  unFollowUser,
  setPage,
  getUsers,
}),
)(UsersContainer);
