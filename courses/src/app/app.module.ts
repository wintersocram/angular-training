import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './services/email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseService } from './course/course.service';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PwdChangeComponent } from './pwd-change/pwd-change.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    InputFormatDirective,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PwdChangeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    EmailService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
