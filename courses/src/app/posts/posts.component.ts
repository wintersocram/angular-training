import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'html-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  urlGet: string = 'http://jsonplaceholder.typicode.com/posts';
  urlPost: string = 'http://jsonplaceholder.typicode.com/posts';
  posts: any[] = [];
  constructor(private http1: HttpClientModule, private http2: HttpClient) {
    this.getPosts();
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.http2.post(this.urlPost, JSON.stringify(post))
      .subscribe(res => {
        post['id'] = res['id'];
        console.log(post);
        this.posts.splice(0, 0, post);
        console.log(res);
      })
  }

  getPosts() {
    this.http2.get(this.urlGet)
      .subscribe(res => {
        // console.log('res: %o', this.posts);
        console.log('typeof response: %o', typeof res);
        this.posts = res;
        console.log('res: %o', this.posts);
      });
  }
}
