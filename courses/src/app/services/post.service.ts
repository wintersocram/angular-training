import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  /* CRUD operations */
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  readAllPost() {
    return this.http.get(this.url);
  }
  readPost(postId) {
    return this.http.get(this.url + '/' + postId);
  }
  updatePostUsingPatch(post) {
    return this.http.patch(
      this.url + '/' + post.id, 
      JSON.stringify({ isRead: true})
    );
  }
  updatePostUsingPut(post) {
    return this.http.put(this.url + '/' + post.id, post);
  }
  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
