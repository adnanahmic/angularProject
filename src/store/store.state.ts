import { Post } from '../interface/post.interface';

export interface PostState {
  posts: Post[];
  singlePost: Post | null;
}

export const initialState: PostState = {
  posts: [],
  singlePost: null,
};
