import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setIsFetching } from "../../redux/usersReduser";
import Axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.setIsFetching(true);
      Axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`
      ).then((res) => {
        this.props.setUsers(res.data.items, res.data.totalCount);
        this.props.setIsFetching(false);
      });
    }
  }

  changePage = (p) => {
    this.props.setPage(p);
    this.props.setIsFetching(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
    ).then((res) => {
      this.props.setUsers(res.data.items, res.data.totalCount);
      this.props.setIsFetching(false);
    });
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
  };
};

export default connect(mapState, {follow, unfollow, setUsers, setPage, setIsFetching})(UsersContainer);
