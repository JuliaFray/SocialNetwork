import { profileAPI } from './../API/API';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {

    posts: [
        { id: 1, message: 'My first post', like: 10, dislike: 0 },
        { id: 2, message: 'Hi, my new post', like: 20, dislike: 1 }
    ],

    newPostText: '',

    profile: null,

    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 10,
                dislike: 0
            };
            // debugger
            return {
                ...state,
                posts: [...state.posts, newPost],
            };


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };

        case SET_PROFILE:

            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });



export const getProfileTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response));
};


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    dispatch(setStatus(status))
};


export default profileReducer;