export const getUsers = (state) => {
    return state.usersPage.users
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getUserId = (state) => {
    return state.usersPage.userId
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};