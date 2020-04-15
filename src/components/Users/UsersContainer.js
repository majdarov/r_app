import React from "react";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC, setPageAC } from "../../redux/usersReduser";
import Axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
      if (!this.props.users.length) {
          Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`)
              .then(res => {
                  this.props.setUsers(res.data.items, res.data.totalCount);
              });
      }
  }

  changePage = p => {
      this.props.setPage(p);
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
          .then(res => {
              this.props.setUsers(res.data.items, res.data.totalCount);
          });

  }

  render() {
      return <Users {...this.props} changePage={this.changePage}/>
  }
}

const mapState = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageNumber: state.usersPage.pageNumber
  };
};

const mapDispatch = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users, totalCount) => {
      dispatch(setUsersAC(users, totalCount));
    },
    setPage: p => {
      dispatch(setPageAC(p));
    }
  };
};

export default connect(mapState, mapDispatch)(UsersContainer);
