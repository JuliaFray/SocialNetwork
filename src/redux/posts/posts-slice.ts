import {PostType} from '../../types/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createPost, deletePost, editPost, getAllPosts, getOnePost, getPopularPost, markPostFavorite} from './posts-thunks';

type InitialStateType = {
    posts: PostType[],
    newPostId: string,
    isFetching: boolean,
    popularPost: PostType | null
}

const initialState: InitialStateType = {
    posts: [],
    newPostId: '',
    isFetching: false,
    popularPost: null
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearState: (state) => {
            state.posts = [];
            state.isFetching = false;
            state.newPostId = '';
        }
    },
    extraReducers: (builder) => {
        builder
            //=====getAllPosts=====//
            .addCase(getAllPosts.pending, (state) => {
                state.isFetching = true;
                state.posts = [];
            })
            .addCase(getAllPosts.fulfilled, (state, action: PayloadAction<PostType[]>) => {
                state.isFetching = false;
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state) => {
                state.isFetching = false;
                state.posts = [];
            })
            //=====markPostFavorite=====//
            .addCase(markPostFavorite.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(markPostFavorite.fulfilled, (state) => {
                state.isFetching = false;
            })
            .addCase(markPostFavorite.rejected, (state) => {
                state.isFetching = false;
            })
            //=====getPopularPost=====//
            .addCase(getPopularPost.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(getPopularPost.fulfilled, (state, action) => {
                state.isFetching = false;
                state.popularPost = action.payload;
            })
            .addCase(getPopularPost.rejected, (state) => {
                state.isFetching = false;
                state.popularPost = null;
            })
            //=====getOnePost=====//
            .addCase(getOnePost.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(getOnePost.fulfilled, (state, action) => {
                state.isFetching = false;
            })
            .addCase(getOnePost.rejected, (state) => {
                state.isFetching = false;
            })
            //=====editPost=====//
            .addCase(editPost.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(editPost.fulfilled, (state) => {
                state.isFetching = false;
            })
            .addCase(editPost.rejected, (state) => {
                state.isFetching = false;
            })
            //=====createPost=====//
            .addCase(createPost.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(createPost.fulfilled, (state) => {
                state.isFetching = false;
            })
            .addCase(createPost.rejected, (state) => {
                state.isFetching = false;
                state.newPostId = '';
            })
            //=====deletePost=====//
            .addCase(deletePost.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isFetching = false;
                state.posts = state.posts.filter(p => p._id !== action.meta.arg.payload._id)
            })
            .addCase(deletePost.rejected, (state) => {
                state.isFetching = false;
            })
    }
});

export default postsSlice.reducer;
