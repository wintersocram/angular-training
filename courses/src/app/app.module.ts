import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseService } from './course/course.service';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
