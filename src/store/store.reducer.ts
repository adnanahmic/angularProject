import { Action, createReducer, on } from '@ngrx/store';
import {
  addNewPostSuccess,
  deletePostsSuccess,
  loadPostSuccess,
  logOut,
  singlePostSuccess,
  updatePostSuccess,
} from '../store/store.action';
import { initialState, PostState } from '../store/store.state';

const _postReducer = createReducer(
  initialState,
  on(addNewPostSuccess, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }),
  on(updatePostSuccess, (state, action) => {
    const updatesPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatesPosts,
    };
  }),
  on(deletePostsSuccess, (state, { id }) => {
    const updatesPosts = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: updatesPosts,
    };
  }),
  on(loadPostSuccess, (state, action) => {
    return {
      ...state,
      posts: action.post,
    };
  }),
  on(singlePostSuccess, (state, action) => {
    return {
      ...state,
      singlePost: action.singlePost,
    };
  }),
  on(logOut, (state, action) => {
    return {
      ...state,
      posts: [],
    };
  })
);

export function postReducer(state: PostState | undefined, action: Action) {
  return _postReducer(state, action);
}
