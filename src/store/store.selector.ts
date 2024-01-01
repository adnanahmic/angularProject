import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../store/store.state';

const getPostsState = createFeatureSelector<PostState>('post');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state) => {
  return state.singlePost;
});
