import { createAction, props } from '@ngrx/store';
import { Post } from '../interface/post.interface';

export const ADD_POST_ACTION = '[post] add new post';
export const ADD_POST_ACTION_SUCCESS = '[post] add new post success';

export const UPDATE_POST_ACTION = '[post] update post';
export const UPDATE_POST_SUCCESS = '[post] update post success';

export const DELETE_POST_ACTION = '[post] delete post';
export const DELETE_POST_SUCCESS = '[post] delete post success';

export const LOAD_POSTS = '[post] load post';
export const LOAD_POSTS_SUCCESS = '[post] load post success';

export const LOGOUT = '[post] Logout success';
export const SINGLE_POST = '[singlePost] Edit post success';

export const AddNewPost = createAction(
  ADD_POST_ACTION,
  props<{ post: Post }>()
);
export const addNewPostSuccess = createAction(
  ADD_POST_ACTION_SUCCESS,
  props<{ post: Post }>()
);

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: Post }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);
export const deletePostsSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>()
);

export const loadPost = createAction(LOAD_POSTS);
export const loadPostSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ post: Post[] }>()
);

export const logOut = createAction(LOGOUT);

export const singlePostSuccess = createAction(
  SINGLE_POST,
  props<{ singlePost: Post | null }>()
);
