import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../interface/post.interface';
import { API } from '../../constants/api';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  loadPostData(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API.BASE_URL}${API.POSTS}`).pipe(
      map((post) => {
        return post;
      }),
      (err) => {
        return err;
      }
    );
  }

  addNewPostData(post: Post): Observable<any> {
    return this.http.post<any>(`${API.BASE_URL}${API.POSTS}`, post).pipe(
      map((post) => {
        return post;
      }),
      (err) => {
        return err;
      }
    );
  }

  updatePost(post: Post) {
    const PostData = { title: post.title, body: post.body };
    return this.http
      .patch(`${API.BASE_URL}${API.POSTS}/${post.id}`, PostData)
      .pipe(
        map((post) => {
          return post;
        }),
        (err) => {
          return err;
        }
      );
  }

  deletePost(id: string) {
    return this.http.delete(`${API.BASE_URL}${API.POSTS}/${id}`).pipe(
      map((post) => {
        return post;
      }),
      (err) => {
        return err;
      }
    );
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${API.BASE_URL}${API.POSTS}/${id}`).pipe(
      map((post) => {
        return post;
      }),
      (err) => {
        return err;
      }
    );
  }
}
