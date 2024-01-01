import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, mergeMap, of, switchMap } from 'rxjs';
import { PostService } from '../shared/service/post.service';
import {
  AddNewPost,
  addNewPostSuccess,
  deletePost,
  deletePostsSuccess,
  loadPost,
  loadPostSuccess,
  logOut,
  singlePostSuccess,
  updatePost,
  updatePostSuccess,
} from '../store/store.action';
import { PostState } from '../store/store.state';
import { StorageService } from '../shared/service/storage.service';
import { ToastrService } from 'ngx-toastr';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { SUCCESS } from '../constants/toastr';
import { NAVIGATION } from '../constants/navigation';

@Injectable()
export class PostEffect {
  constructor(
    private postService: PostService,
    private action$: Actions,
    private store: Store<PostState>,
    private route: Router,
    private storage: StorageService,
    private toastr: ToastrService
  ) {}

  loadPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPost),
      mergeMap((action) => {
        return this.postService.loadPostData().pipe(
          map((post) => {
            return loadPostSuccess({ post });
          }),
          catchError((error) => {
            return of(error);
          })
        );
      })
    );
  });

  addNewPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AddNewPost),
      mergeMap((action) => {
        return this.postService.addNewPostData(action.post).pipe(
          map((posts) => {
            const post = { ...action.post };
            this.toastr.success(SUCCESS.NEW_POST);
            this.route.navigateByUrl(NAVIGATION.DASHBOARD);
            return addNewPostSuccess({ post: post });
          }),
          catchError((error) => {
            return of(error);
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((posts) => {
            this.toastr.success(SUCCESS.EDIT_POST);
            this.route.navigateByUrl(NAVIGATION.DASHBOARD);
            return updatePostSuccess({ post: action.post });
          }),
          catchError((error) => {
            return of(error);
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postService.deletePost(action.id).pipe(
          map((posts) => {
            this.toastr.success(SUCCESS.DELETE_POST);
            return deletePostsSuccess({ id: action.id });
          }),
          catchError((error) => {
            return of(error);
          })
        );
      })
    );
  });

  singlePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith(`/license`);
      }),
      map((r: any) => {
        return r.payload.routerState['params']['id'];
      }),
      switchMap((id) => {
        return this.postService.getPostById(id).pipe(
          map((singlePost) => {
            const PostData = { ...singlePost, id };
            return singlePostSuccess({ singlePost: PostData });
          }),
          catchError((error) => {
            return of(error);
          })
        );
      })
    );
  });

  logOut$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(logOut),
        map((action) => {
          this.storage.clear();
          this.toastr.success(SUCCESS.LOG_OUT);
          this.route.navigate([NAVIGATION.AUTH]);
        }),
        catchError((error) => {
          return of(error);
        })
      );
    },
    { dispatch: false }
  );
}
