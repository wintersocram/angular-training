import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'html-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private service: PostService){}

  ngOnInit() {
    this.service.getAll()
      .subscribe((posts: any[]) => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
            this.posts.splice(0, 0, post);
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            }
            else throw error;
          });
  }

  updatePost(input) {
    let post = {value: 'updated value'};
    this.service.update(input, post)
      .subscribe(
        (res) => {
          console.log(res);
          let updatedPost = Object.assign({}, post, res);
          let index = this.posts.indexOf(input);
          this.posts[index] = updatedPost;
          console.log(this.posts[index]);
        },
        // (error: AppError) => {
        //   if (error instanceof NotFoundError)
        //     alert('This post has already been deleted.');
        //   else throw error;
        // }
        );
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
  }
}
