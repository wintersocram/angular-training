import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'html-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService){
    this.getPosts();
  }

  ngOnInit() {
    console.warn('ngOnInit');
    this.getPosts();
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.service.createPost(post)
      .subscribe(res => {
        post['id'] = res['id'];
        console.log(post);
        this.posts.splice(0, 0, post);
        console.log(res);
      })
  }

  getPosts() {
    console.warn('getPosts');
    this.service.readAllPost()
      .subscribe(res => {
        // console.log('res: %o', this.posts);
        console.log('typeof response: %o', typeof res);
        this.posts = res;
        console.log('res: %o', this.posts);
      });
  }

  updatePost(post) {
    this.service.updatePostUsingPatch(post)
      .subscribe(res => console.log(res));
    // this.http2.patch(this.urlPut + '/' + post.id, JSON.stringify(post))
    //   .subscribe(res => console.log(res));
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
