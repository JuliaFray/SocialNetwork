import {ProfileType} from '../../types/types';
import {createSlice} from '@reduxjs/toolkit';
import {getUserProfile, saveUserProfile, updateUserStatus} from './profile-thunks';

type InitialStateType = {
    profile: ProfileType | null,
    isFetching?: boolean,
}

const initialState: InitialStateType = {
    profile: null,
    isFetching: false
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}, extraReducers: (builder) => {
        builder
            //=====authUser=====//
            .addCase(getUserProfile.pending, (state, action) => {
                state.isFetching = true;
                state.profile = null;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.isFetching = false;
                state.profile = action.payload;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.isFetching = false;
                state.profile = null;
            })
            //=====updateUserStatus=====//
            .addCase(updateUserStatus.pending, (state, action) => {
                state.isFetching = true;
            })
            .addCase(updateUserStatus.fulfilled, (state, action) => {
                state.isFetching = false;
                if(state.profile) {
                    state.profile.status = action.meta.arg.status;
                }
            })
            .addCase(updateUserStatus.rejected, (state, action) => {
                state.isFetching = false;
            })
            //=====saveUserProfile=====//
            .addCase(saveUserProfile.pending, (state, action) => {
                state.isFetching = true;
            })
            .addCase(saveUserProfile.fulfilled, (state, action) => {
                state.isFetching = false;
                if(state.profile) {
                    state.profile = action.meta.arg.profile;
                }
            })
            .addCase(saveUserProfile.rejected, (state, action) => {
                state.isFetching = false;
            })
    }
});

export default profileSlice.reducer;