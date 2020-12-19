import { createSelector } from "reselect"

const getUsersForSelector = state => {
    return state.usersPage.users
}

export const getUsers = createSelector(
    getUsersForSelector,
    users => users.filter(u => true)
)

export const getPageSize = state => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount
}

export const getPageNumber = state => {
    return state.usersPage.pageNumber
}

export const getIsFetching = state => {
    return state.usersPage.isFetching
}

export const getCurrentFollowers = state => {
    return state.usersPage.currentFollowers
}
