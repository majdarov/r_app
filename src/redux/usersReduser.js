import { usersApi } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_ISFETCHING = 'ISFETCHING-SWITCH';
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE-FOLLOW-PROGRESS';

let initialState = {
  users: [
    // {
    //   id: 0,
    //   followed: false,
    //   fullName: "Dymich",
    //   photo: "0.jpg",
    //   status: "Sensay IT-Kamasutra",
    //   location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: "Andrey",
    //   photo: "1.jpg",
    //   status: "Hto ne sckache tot moscal",
    //   location: { city: "Kiev", country: "Ukraine" }
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Michael",
    //   photo: "2.jpg",
    //   status: "I'm Learning React",
    //   location: { city: "Uljanovsk", country: "Russia" }
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: "Vlad",
    //   photo: "3.jpg",
    //   status: "C# Guru",
    //   location: { city: "Uljanovsk", country: "Russia" }
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   fullName: "Katya",
    //   photo: "4.jpg",
    //   status: "Busines Analitic",
    //   location: { city: "Moscow", country: "Russia" }
    // },
    // {
    //   id: 5,
    //   followed: true,
    //   fullName: "Gala",
    //   photo: "5.jpg",
    //   status: "Busines Woman",
    //   location: { city: "Uljanovsk", country: "Russia" }
    // }
  ],
  pageSize: 10,
  totalUsersCount: 0,
  pageNumber: 1,
  isFetching: false,
  currentFollowers: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: true };
          }
          return item;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: false };
          }
          return item;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
        totalUsersCount: action.totalCount,
      };
    case SET_PAGE:
      return {
        ...state,
        pageNumber: action.p,
      };
    case SET_ISFETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOW_PROGRESS:
      let currentFollowers = [...state.currentFollowers];
      if (action.isFollowProgress) {
        currentFollowers.push(action.id);
      } else {
        let i = currentFollowers.findIndex((item) => item === action.id);
        currentFollowers.splice(i, 1);
      }
      return {
        ...state,
        currentFollowers,
      };
    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsers = (users, totalCount) => {
  return { type: SET_USERS, users, totalCount };
};

export const setPage = (p) => {
  return { type: SET_PAGE, p };
};

export const setIsFetching = (isFetching) => {
  return { type: SET_ISFETCHING, isFetching };
};

export const setIsFollowProgress = (isFollowProgress, id) => {
  return { type: TOGGLE_FOLLOW_PROGRESS, isFollowProgress, id };
};

export const getUsers = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersApi.getUsers(pageNumber, pageSize).then((res) => {
      dispatch(setUsers(res.items, res.totalCount));
      dispatch(setIsFetching(false));
    });
  };
};

export const followUser = (id) => {
  return (dispatch) => {
    dispatch(setIsFollowProgress(true, id));
    usersApi.followUser(id).then((res) => {
      if (res.resultCode === 0) {
        dispatch(follow(id));
      } else {
        alert(res.messages);
      }
      dispatch(setIsFollowProgress(false, id));
    });
  };
};
export const unFollowUser = (id) => {
  return (dispatch) => {
    dispatch(setIsFollowProgress(true, id));
    usersApi.unFollowUser(id).then((res) => {
      if (res.resultCode === 0) {
        dispatch(unfollow(id));
      } else {
        alert(res.messages);
      }
      dispatch(setIsFollowProgress(false, id));
    });
  };
};
export default usersReduser;
